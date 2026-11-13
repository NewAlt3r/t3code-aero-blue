import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { openCommandPalette } from "../../commandPaletteBus";
import { Button } from "../ui/button";

export function AeroProjectStart({
  title,
  workspace,
  composerInset,
  onTerminal,
  onFiles,
  available,
}: {
  title: string;
  workspace: string | null;
  composerInset: number;
  onTerminal: () => void;
  onFiles: () => void;
  available: boolean;
}) {
  return (
    <section
      className="absolute inset-0 z-10 hidden overflow-y-auto bg-aero-project bg-cover p-5 aero:block sm:p-7"
      style={{ paddingBottom: composerInset + 24 }}
      aria-label="Área de trabalho do projeto"
    >
      <div className="flex items-center gap-4 border-b border-border pb-5">
        <img src="/aero-blue/folder.svg" alt="" className="size-16 shrink-0" />
        <div className="min-w-0">
          <h1 className="truncate text-xl font-medium text-foreground sm:text-2xl">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">Área de trabalho do projeto</p>
          {workspace ? (
            <Tooltip>
              <TooltipTrigger
                render={<p className="mt-1 truncate text-xs text-muted-foreground" />}
              >
                {workspace}
              </TooltipTrigger>
              <TooltipPopup>{workspace}</TooltipPopup>
            </Tooltip>
          ) : null}
        </div>
      </div>
      <div className="mt-5 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-base font-semibold text-foreground">O que vamos fazer?</h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Escreva sua solicitação no painel de mensagem abaixo. A conversa e as alterações do
            projeto aparecem aqui.
          </p>
          <div className="mt-4">
            <Button
              variant="aero-tool"
              size="sm"
              onClick={() => openCommandPalette({ open: "new-thread-in" })}
            >
              Escolher outro projeto
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-aero-frame bg-card shadow-aero-control">
          <div className="border-b border-border bg-aero-ribbon px-3 py-2 text-xs font-semibold text-foreground">
            Ferramentas do projeto
          </div>
          <Button variant="aero-task" size="aero-task" onClick={onTerminal} disabled={!available}>
            <img src="/aero-blue/terminal.svg" alt="" className="size-9 shrink-0" />
            <span>
              <span className="block font-medium">Abrir terminal</span>
              <span className="block text-xs font-normal text-muted-foreground">
                Execute comandos na pasta do projeto.
              </span>
            </span>
          </Button>
          <Button variant="aero-task" size="aero-task" onClick={onFiles} disabled={!available}>
            <img src="/aero-blue/folder.svg" alt="" className="size-9 shrink-0" />
            <span>
              <span className="block font-medium">Arquivos e prévia</span>
              <span className="block text-xs font-normal text-muted-foreground">
                Abra o painel lateral de trabalho.
              </span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
