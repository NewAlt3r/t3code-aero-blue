export function AeroWelcome({ context }: { context: "project" | "thread" }) {
  return (
    <div className="hidden max-w-sm flex-col items-center gap-4 px-4 text-center aero:flex">
      <img src="/aero-blue/orb.svg" alt="" className="size-16 drop-shadow-md sm:size-20" />
      <div className="space-y-2">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          {context === "project" ? "Abra um projeto para começar" : "Qual é a próxima mudança?"}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {context === "project"
            ? "Escolha a pasta em que você quer trabalhar. Suas conversas ficam junto do projeto."
            : "Descreva o que você quer fazer. Acompanhe o trabalho e revise os arquivos antes de salvar no Git."}
        </p>
      </div>
    </div>
  );
}
