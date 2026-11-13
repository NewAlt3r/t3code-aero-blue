import * as NodeChildProcess from "node:child_process";
import * as NodeFSP from "node:fs/promises";
import * as NodeURL from "node:url";
import * as NodePath from "node:path";

const root = NodeURL.fileURLToPath(new URL("../", import.meta.url));
const home = NodePath.join(root, ".t3-aero-blue-dev");
const userdata = NodePath.join(home, "userdata");
await NodeFSP.mkdir(NodePath.join(userdata, "themes"), { recursive: true });
await NodeFSP.copyFile(
  NodePath.join(root, "assets/aero-blue/aero-blue.json"),
  NodePath.join(userdata, "themes/aero-blue.json"),
);
const settingsPath = NodePath.join(userdata, "settings.json");
// This isolated preview never changes the installed app's data or theme.
const settings = await NodeFSP.readFile(settingsPath, "utf8").then(
  (raw) => JSON.parse(raw),
  (error: NodeJS.ErrnoException) => {
    if (error.code !== "ENOENT") throw error;
    return {};
  },
);
await NodeFSP.writeFile(
  settingsPath,
  JSON.stringify(
    {
      ...settings,
      defaultTheme: "aero-blue",
      defaultThemeSetAt: new Date().toISOString(),
      onboardingCompletedAt: settings.onboardingCompletedAt ?? new Date().toISOString(),
    },
    null,
    2,
  ) + "\n",
);
const child = NodeChildProcess.spawn("vp", ["run", "dev", "--home-dir", home, "--no-seed"], {
  cwd: root,
  stdio: "inherit",
});
process.once("SIGINT", () => child.kill("SIGINT"));
process.once("SIGTERM", () => child.kill("SIGTERM"));
child.once("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.once("exit", (code) => {
  process.exitCode = code ?? 1;
});
