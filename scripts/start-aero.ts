// @effect-diagnostics nodeBuiltinImport:off globalConsole:off - This Node bootstrap starts Electron before an application runtime exists.
import * as NodeChildProcess from "node:child_process";
import * as NodeOS from "node:os";
import * as NodeFSP from "node:fs/promises";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";

import { prepareAeroState } from "./aero-state.ts";

const root = NodeURL.fileURLToPath(new URL("../", import.meta.url));
await NodeFSP.access(NodePath.join(root, "apps/desktop/dist-electron/main.cjs"));
const home = await prepareAeroState(root);
const env: NodeJS.ProcessEnv = {
  ...process.env,
  T3CODE_HOME: home,
  T3CODE_DESKTOP_LAUNCHER_PATH: NodePath.join(NodeOS.homedir(), ".local/bin/t3aero"),
  T3CODE_AERO_BLUE: "1",
  T3CODE_DISABLE_AUTO_UPDATE: "1",
  T3CODE_TELEMETRY_ENABLED: "false",
};
delete env.VITE_DEV_SERVER_URL;
delete env.ELECTRON_RUN_AS_NODE;
const child = NodeChildProcess.spawn(
  process.execPath,
  [NodePath.join(root, "apps/desktop/scripts/start-electron.mjs"), ...process.argv.slice(2)],
  { cwd: NodePath.join(root, "apps/desktop"), env, stdio: "inherit" },
);
process.once("SIGINT", () => child.kill("SIGINT"));
process.once("SIGTERM", () => child.kill("SIGTERM"));
child.once("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.once("exit", (code) => {
  process.exitCode = code ?? 1;
});
