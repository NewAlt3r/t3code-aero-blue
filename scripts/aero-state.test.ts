// @effect-diagnostics nodeBuiltinImport:off - The standalone initializer is verified against real temporary files.
import * as NodeFSP from "node:fs/promises";
import * as NodeOS from "node:os";
import * as NodePath from "node:path";
import { expect, it } from "vite-plus/test";

import { prepareAeroState } from "./aero-state.ts";

async function fixture() {
  const root = await NodeFSP.mkdtemp(NodePath.join(NodeOS.tmpdir(), "aero-state-"));
  await NodeFSP.mkdir(NodePath.join(root, "assets/aero-blue"), { recursive: true });
  await NodeFSP.writeFile(
    NodePath.join(root, "assets/aero-blue/aero-blue.json"),
    '{"id":"aero-blue"}',
  );
  const userdata = NodePath.join(root, ".t3-aero-blue-dev/userdata");
  await NodeFSP.mkdir(userdata, { recursive: true });
  return {
    root,
    settingsPath: NodePath.join(userdata, "settings.json"),
    async [Symbol.asyncDispose]() {
      await NodeFSP.rm(root, { recursive: true, force: true });
    },
  };
}

it("preserves chosen settings and conversation data when initializing the Aero launcher", async () => {
  await using project = await fixture();
  await NodeFSP.writeFile(
    project.settingsPath,
    JSON.stringify({
      defaultTheme: "ocean",
      defaultRuntimeMode: "auto",
      providerInstances: { custom: { driver: "codex" } },
    }),
  );
  const database = NodePath.join(NodePath.dirname(project.settingsPath), "statev2.sqlite");
  await NodeFSP.writeFile(database, "existing conversation data");
  await prepareAeroState(project.root);
  const settings = JSON.parse(await NodeFSP.readFile(project.settingsPath, "utf8"));
  expect(settings.defaultTheme).toBe("ocean");
  expect(settings.defaultRuntimeMode).toBe("auto");
  expect(settings.providerInstances).toEqual({ custom: { driver: "codex" } });
  expect(await NodeFSP.readFile(database, "utf8")).toBe("existing conversation data");
});

it("does not overwrite malformed settings", async () => {
  await using project = await fixture();
  await NodeFSP.writeFile(project.settingsPath, "{unfinished");
  await expect(prepareAeroState(project.root)).rejects.toThrow();
  expect(await NodeFSP.readFile(project.settingsPath, "utf8")).toBe("{unfinished");
});

it("initializes a new environment with supervised permissions", async () => {
  await using project = await fixture();
  await prepareAeroState(project.root);
  const settings = JSON.parse(await NodeFSP.readFile(project.settingsPath, "utf8"));
  expect(settings.defaultRuntimeMode).toBe("approval-required");
});
