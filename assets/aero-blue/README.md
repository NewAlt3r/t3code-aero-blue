# Assets Aero Blue

`aero-blue.json` é a paleta clara do tema, importável em **Settings → Appearance → Create theme / Import** e publicável como tema do ambiente conforme o [guia original](../../docs/user/appearance.md).

O acabamento com ondas, vidro e botões depende do código deste fork; importar apenas o JSON no T3 Code original aplica as cores.

Os vetores `apps/web/public/aero-blue/orb.svg` e `blue-waves.svg` foram criados para este fork e são distribuídos sob a [licença MIT do repositório](../../LICENSE). Não usam imagens ou logotipos extraídos das referências.

Para abrir uma prévia local isolada com o tema selecionado, execute `vp run dev:aero` na raiz após `vp i`. Os dados ficam no diretório ignorado `.t3-aero-blue-dev/`; isso não inicia uma tarefa paga do Codex.

`orb.png` é a rasterização do vetor original para o ícone da janela nativa e usa a mesma licença. O inicializador `vp run install:aero` instala o comando e a entrada do menu sem copiar credenciais ou histórico.
