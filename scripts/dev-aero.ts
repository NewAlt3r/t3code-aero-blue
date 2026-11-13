// @effect-diagnostics nodeBuiltinImport:off globalConsole:off - This Node bootstrap starts the app runtime and forwards its process lifecycle.
import * as NodeChildProcess from "node:child_process";
import * as NodeURL from "node:url";

import { prepareAeroState } from "./aero-state.ts";

const root = NodeURL.fileURLToPath(new URL("../", import.meta.url));
const home = await prepareAeroState(root);
const requested = process.argv.slice(2);
const desktop = requested.includes("--desktop");
const args = requested.filter((arg) => arg !== "--desktop");
const child = NodeChildProcess.spawn(
  "vp",
  ["run", desktop ? "dev:desktop" : "dev", "--home-dir", home, "--no-seed", ...args],
  {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, T3CODE_AERO_BLUE: "1", T3CODE_DISABLE_AUTO_UPDATE: "1" },
  },
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
