// @effect-diagnostics nodeBuiltinImport:off globalDate:off - Standalone launcher initialization uses Node files and a persisted wall-clock setup timestamp.
import * as NodeFSP from "node:fs/promises";
import * as NodePath from "node:path";

export async function prepareAeroState(root: string): Promise<string> {
  const home = NodePath.join(root, ".t3-aero-blue-dev");
  const userdata = NodePath.join(home, "userdata");
  await NodeFSP.mkdir(NodePath.join(userdata, "themes"), { recursive: true });
  const themePath = NodePath.join(userdata, "themes/aero-blue.json");
  const themeTemporary = `${themePath}.${process.pid}.tmp`;
  await NodeFSP.copyFile(NodePath.join(root, "assets/aero-blue/aero-blue.json"), themeTemporary);
  await NodeFSP.rename(themeTemporary, themePath);
  const settingsPath = NodePath.join(userdata, "settings.json");
  const raw = await NodeFSP.readFile(settingsPath, "utf8").catch((error: NodeJS.ErrnoException) => {
    if (error.code !== "ENOENT") throw error;
    return "{}";
  });
  const settings: unknown = JSON.parse(raw);
  if (typeof settings !== "object" || settings === null || Array.isArray(settings)) {
    throw new Error("As configurações do T3aero são inválidas. O arquivo original foi preservado.");
  }
  const now = new Date().toISOString();
  const defaults = {
    defaultTheme: "aero-blue",
    defaultThemeSetAt: now,
    defaultRuntimeMode: "approval-required",
    onboardingCompletedAt: now,
  };
  if (Object.keys(defaults).every((key) => Object.hasOwn(settings, key))) return home;
  const temporary = `${settingsPath}.${process.pid}.tmp`;
  await NodeFSP.writeFile(temporary, JSON.stringify({ ...defaults, ...settings }, null, 2) + "\n");
  await NodeFSP.rename(temporary, settingsPath);
  return home;
}
