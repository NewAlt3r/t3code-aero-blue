# Usar o T3aero no Linux Mint

## Abrir e fechar

Digite `t3aero` no terminal ou procure **T3aero** no menu do Mint. O comando abre a janela desktop; não precisa copiar um endereço nem abrir o navegador. Se o aplicativo já estiver aberto, a entrada do menu deve trazer a janela existente.

Feche a janela para encerrar o aplicativo. A versão local usa o desktop Electron do T3 Code e o servidor que ele gerencia, sem os watchers de desenvolvimento.

## Trabalhar no projeto

O projeto **T3aero** pode ser adicionado escolhendo a pasta deste repositório. Na instalação pessoal inicial ele já foi adicionado sem iniciar uma tarefa de agente.

1. Escolha o projeto na barra lateral.
2. Abra uma conversa e confira modelo e permissões antes de enviar.
3. Descreva uma mudança concreta.
4. Acompanhe os arquivos e abra a prévia quando necessário.
5. Revise a comparação dos arquivos antes de fazer commit e enviar ao GitHub.

Não existe commit ou publicação automática implementada pelo Aero Blue. O agente continua sujeito às permissões da conversa e às aprovações que você conceder.

## Terminal e painéis

No Linux, o atalho padrão **Ctrl+J** abre ou recolhe o terminal. **Ctrl+Alt+B** alterna o painel direito. Os atalhos podem ser alterados em **Settings → Keybindings**. O terminal, os arquivos, a prévia e os controles de comparação são os recursos existentes do T3 Code.

O conteúdo, o layout e o contexto persistentes usam os mecanismos da base. Abertura e fechamento foram conferidos localmente; retomada de um fluxo real com tarefas em andamento ainda precisa ser validada. Não foi acrescentado nenhum comando automático ao abrir o Aero Blue.

## Aparência

Em **Settings → Appearance**, o tema **Aero Blue** controla a identidade visual. Desative **Efeitos Aero** para usar uma versão opaca e mais leve. O controle usa a preferência existente de opacidade do vidro: 100% desativa os efeitos, e valores menores os ativam.

Ondas e brilhos ficam nos estados iniciais; uma conversa com conteúdo tem fundo estável para leitura. A tipografia e os tamanhos configuráveis da base foram preservados. As preferências do usuário não são redefinidas a cada abertura.

## Permissões e recuperação

O inicializador preenche **Supervised** como padrão quando o ambiente ainda não tem uma preferência. Projetos podem ter exceções, e conversas existentes mantêm suas permissões. Confira o modo da conversa; isso não é um bloqueio independente de Git ou de rede.

Os checkpoints e os diálogos de revisão continuam sendo os da base. Os testes direcionados de proteção de restauração passaram, mas isso não valida todas as situações de edição manual simultânea. A prevenção completa de perda de alterações concorrentes continua como critério de validação antes de uma versão estável.

## Onde ficam os dados

- Projetos, histórico e configurações do ambiente: `.t3-aero-blue-dev/`, dentro do checkout.
- Perfil da janela Electron: `~/.config/t3aero/` no Linux padrão.
- Comando pessoal: `~/.local/bin/t3aero`.
- Entrada visível no menu: `io.github.NewAlt3r.T3aero.Launcher.desktop`, na pasta de aplicativos do usuário.

O nome do diretório de dados mantém compatibilidade com a primeira prévia. Não apague essa pasta para atualizar o visual: ela contém seu histórico. O perfil Electron é separado dos perfis oficiais do T3 Code. Os agentes mantêm suas próprias credenciais; o T3aero não cria uma conta ou uma assinatura própria.

## Atualizar a versão local

Depois de revisar mudanças no código, feche o aplicativo e compile novamente na raiz:

```bash
vp run build:desktop
vp run install:aero
t3aero
```

A instalação do inicializador não usa `sudo`. Se mover o checkout, execute `vp run install:aero` na nova pasta. Para preparar uma máquina nova e instalar dependências de compilação, consulte [desenvolvimento](DEVELOPMENT.md).

Não execute o servidor de desenvolvimento ao mesmo tempo que o desktop usando o mesmo diretório de dados.
