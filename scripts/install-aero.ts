// @effect-diagnostics nodeBuiltinImport:off globalConsole:off - The user-level installer runs independently of the application runtime.
import * as NodeFSP from "node:fs/promises";
import * as NodeOS from "node:os";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";

const root = NodeURL.fileURLToPath(new URL("../", import.meta.url));
// oxlint-disable-next-line t3code/no-global-process-runtime -- Standalone installer checks the host before writing a Linux desktop entry.
if (process.platform !== "linux") throw new Error("Este inicializador é para Linux.");
const home = NodeOS.homedir();
const bin = NodePath.join(home, ".local/bin");
const applications = NodePath.join(
  process.env.XDG_DATA_HOME ?? NodePath.join(home, ".local/share"),
  "applications",
);
await NodeFSP.mkdir(bin, { recursive: true });
await NodeFSP.mkdir(applications, { recursive: true });
const launcher = NodePath.join(bin, "t3aero");
const quote = (value: string) => "'" + value.replaceAll("'", "'\\''") + "'";
const shell = `#!/usr/bin/env bash
set -e
repo=${quote(root)}
if [[ -f "$HOME/.config/vite-plus/env" ]]; then
  source "$HOME/.config/vite-plus/env"
fi
cd "$repo"
exec vp run start:aero "$@"
`;
await NodeFSP.writeFile(launcher, shell, { mode: 0o755 });
await NodeFSP.chmod(launcher, 0o755);
const execPath =
  '"' + launcher.replaceAll("\\", "\\\\").replaceAll('"', '\\"').replaceAll("%", "%%") + '"';
await NodeFSP.writeFile(
  NodePath.join(applications, "io.github.NewAlt3r.T3aero.Launcher.desktop"),
  `[Desktop Entry]
Version=1.0
Type=Application
Name=T3aero
Comment=Seu ambiente Aero Blue para trabalhar com agentes
Exec=${execPath}
Icon=${NodePath.join(root, "assets/aero-blue/orb.png")}
Terminal=false
StartupNotify=true
StartupWMClass=io.github.NewAlt3r.T3aero
Categories=Development;IDE;
Keywords=Codex;Aero;Terminal;
`,
);
console.log("Comando t3aero e entrada no menu instalados para seu usuário.");
