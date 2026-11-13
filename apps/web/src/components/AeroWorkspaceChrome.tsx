import { useAtomValue } from "@effect/atom-react";
import { useNavigate } from "@tanstack/react-router";
import { PanelLeftIcon, PlusIcon, SearchIcon, SettingsIcon } from "lucide-react";

import { openCommandPalette } from "../commandPaletteBus";
import { shortcutLabelForCommand } from "../keybindings";
import { primaryServerKeybindingsAtom } from "../state/server";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function AeroWorkspaceChrome() {
  const { toggleSidebar, state } = useSidebar();
  return (
    <header className="hidden shrink-0 aero:block" data-aero-chrome>
      <div className="drag-region flex h-10 items-center gap-2 bg-aero-title px-4 pr-64 text-foreground">
        <img src="/aero-blue/orb.svg" alt="" className="size-6" />
        <span className="text-sm font-semibold">T3aero</span>
        <span className="hidden text-xs text-muted-foreground sm:inline">Área de trabalho</span>
      </div>
      <div className="flex h-11 items-center gap-1 border-y border-aero-frame bg-aero-ribbon px-3 pr-32 lg:pr-80">
        <Button
          size="sm"
          variant="aero-tool"
          aria-label="Mostrar ou recolher projetos"
          aria-pressed={state === "expanded"}
          onClick={toggleSidebar}
        >
          <PanelLeftIcon />
          <span className="hidden sm:inline">Projetos</span>
        </Button>
        <Button
          size="sm"
          variant="aero-tool"
          onClick={() => openCommandPalette({ open: "new-thread-in" })}
        >
          <PlusIcon />
          <span>Nova conversa</span>
        </Button>
        <Button
          size="sm"
          variant="aero-tool"
          onClick={() => openCommandPalette({ open: "add-project" })}
        >
          <img src="/aero-blue/folder.svg" alt="" className="size-5" />
          <span className="hidden md:inline">Abrir projeto</span>
        </Button>
        <Button
          size="icon-sm"
          variant="aero-tool"
          aria-label="Pesquisar projetos e conversas"
          onClick={() => openCommandPalette()}
        >
          <SearchIcon />
        </Button>
      </div>
    </header>
  );
}

export function AeroWorkspaceStatus() {
  const navigate = useNavigate();
  const keybindings = useAtomValue(primaryServerKeybindingsAtom);
  const terminalShortcut = shortcutLabelForCommand(keybindings, "terminal.toggle");
  return (
    <footer className="hidden h-6 shrink-0 items-center justify-between border-t border-aero-frame bg-aero-ribbon px-3 text-xs text-muted-foreground aero:flex">
      <span>
        T3aero <span className="text-border">|</span> Aero Blue
      </span>
      <div className="flex items-center gap-3">
        {terminalShortcut ? <span>{terminalShortcut} · Terminal</span> : null}
        <Button
          size="micro"
          variant="aero-tool"
          onClick={() => void navigate({ to: "/settings/appearance" })}
        >
          <SettingsIcon />
          Aparência
        </Button>
      </div>
    </footer>
  );
}
