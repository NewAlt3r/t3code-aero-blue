# Histórico do Aero Blue

Este arquivo registra apenas mudanças específicas deste fork. O histórico completo da base permanece no Git e no [projeto T3 Code](https://github.com/pingdotgg/t3code).

## Não lançado

### Desktop local e refinamento Aero

- Janela nativa Electron com identidade T3aero, ícone próprio e perfil isolado em `~/.config/t3aero` no Linux padrão.
- Comandos `start:aero` e `install:aero`; o comando pessoal `t3aero` e o ícone no menu abrem o desktop.
- Entrada visível do menu separada do registro de links, evitando que a inicialização do Electron esconda ou substitua o atalho.
- Encaminhamento dos argumentos de links ao aplicativo através do inicializador.
- Leitura estável em conversas e ondas nos estados iniciais; controles, campos e diálogos com acabamento azul-prata.
- Opção Efeitos Aero em Aparência, usando a preferência de opacidade existente; respeito à redução de transparência do sistema.
- Inicialização preserva escolhas de tema, permissões e provedores; configurações inválidas são preservadas e não substituídas.
- Ambientes sem preferência de permissões começam em modo supervisionado. Modos de conversas e projetos existentes continuam sendo os da base.
- Autoatualização oficial e telemetria desativadas no inicializador nativo do fork.

### Verificação desta etapa

- Compilação desktop concluída, janela nativa aberta e encerramento conferido no Linux Mint/XFCE.
- Abertura pelo comando e pelo menu conferida, incluindo foco na janela existente sem duplicar o aplicativo.
- 37 testes direcionados do inicializador, identidade e isolamento de perfis passaram; outros 10 testes existentes de proteção de restauração também passaram.
- Typecheck de web, desktop e scripts e lint dos arquivos alterados passaram.
- Os testes não executaram uma tarefa paga de agente. Terminal interativo, prévia, aprovações e retomada de uma tarefa real ainda precisam de uma verificação integrada completa.
- O painel `preview_*` indicado pelo guia de teste não está disponível nesta sessão; a observação da janela não substitui essa validação.
- Não foi criada tag ou Release desta etapa; a validação integrada continua pendente.

### Primeira prévia visual

- Paleta clara Aero Blue, importável em JSON pelo sistema de temas existente.
- Fundo vetorial original com ondas, brilhos e bolhas.
- Identidade com esfera de vidro, navegação azul e cabeçalho prateado.
- Botões com degradê e campo de mensagem com borda e sombra suaves.
- Comando `vp run dev:aero` para abrir a prévia com estado separado da instalação normal.
- Acabamento limitado ao tema `aero-blue`; os outros temas continuam selecionáveis.

### Verificação da prévia

- Interface web aberta no Firefox sobre Linux Mint/XFCE e aparência observada em tela.
- Typecheck do pacote web e lint dos arquivos alterados aprovados.
- `check:changed` foi executado: formatação, patches e knip passaram; a execução inicial de lint encontrou problemas corrigidos em seguida. A checagem ampla de tipos de outros pacotes e os testes de navegador não passaram. Não se considera a suíte completa aprovada.
- O painel automatizado indicado pelo guia `test-t3-app` não está disponível nesta sessão; não foi realizada uma validação interativa completa por ele.
- Cliente desktop, acessibilidade completa e tarefas reais de agentes não foram validados nesta prévia. Nenhuma tarefa paga foi executada para produzir a tela.

### Fundação

- Apresentação em português com objetivo, escopo e estado real do Aero Blue.
- Direção visual em azul-gelo inspirada no Frutiger Aero.
- Roteiro das primeiras versões e critérios de conclusão.
- Orientações para desenvolver, verificar e sincronizar o fork com o upstream.
- README original preservado em `README.upstream.md` e licença MIT original mantida.
- Exclusão do diretório local de estado de desenvolvimento do Aero Blue no Git.

### Estado

Esta é uma versão local nativa em desenvolvimento, sem pacote de distribuição, tag ou Release próprios. O motor dos agentes, terminal, revisão e checkpoints continuam sendo os da base T3 Code.
