# T3 Code Aero Blue

Uma versão independente do [T3 Code](https://github.com/pingdotgg/t3code), com a proposta de trazer o visual **Frutiger Aero** para uma interface gráfica de agentes de programação, começando pelo uso com Codex no Linux Mint.

Azul-gelo, superfícies de vidro, degradês suaves e botões com brilho: uma interface pessoal, feita para ser refinada ao longo do tempo, mantendo a base funcional do T3 Code.

> **Estado atual: versão desktop local em desenvolvimento.** O T3aero já abre em janela dedicada no Linux Mint/XFCE, tem comando próprio, ícone no menu, perfil separado e acabamento Aero Blue. Ainda não há instalador `.deb`/AppImage próprio, tag ou Release; a validação completa com tarefas reais continua pendente.

## Objetivos

- Criar uma identidade azul inspirada no Aero clássico e no Frutiger Aero.
- Manter conversas, código e permissões fáceis de ler.
- Começar pelo cliente web e pelo desktop Linux, que compartilham a interface web.
- Preservar o funcionamento dos agentes e acompanhar correções do projeto original.
- Evoluir com mudanças pequenas, capturas de tela e versões identificáveis.

O primeiro ambiente de referência é **Linux Mint com XFCE**. Isso é uma prioridade de desenvolvimento, não uma declaração de compatibilidade já testada. A interface mobile não faz parte da primeira etapa visual.

## Documentação do Aero Blue

| Documento                                                     | Conteúdo                                                 |
| ------------------------------------------------------------- | -------------------------------------------------------- |
| [Como usar](docs/aero-blue/USAGE.md)                          | Abertura, terminal, aparência, dados e atualização local |
| [Direção visual](docs/aero-blue/DESIGN.md)                    | Paleta proposta, acabamento, legibilidade e desempenho   |
| [Evolução do projeto](docs/aero-blue/ROADMAP.md)              | Etapas e critérios para as primeiras versões             |
| [Desenvolvimento e manutenção](docs/aero-blue/DEVELOPMENT.md) | Executar, validar e atualizar o fork                     |
| [Histórico de alterações](CHANGELOG.md)                       | Registro das mudanças específicas do Aero Blue           |

A [apresentação original do T3 Code](README.upstream.md) foi preservada. Os [guias originais](docs/README.md), as [instruções de desenvolvimento](docs/operations/development.md) e a [documentação de temas](docs/user/appearance.md) continuam disponíveis.

## Abrir a instalação pessoal

Digite `t3aero` ou use o ícone **T3aero** no menu do Mint. A janela nativa abre sem abas ou barra de endereço do navegador. **Ctrl+J** alterna o terminal; **Ctrl+Alt+B** alterna o painel direito.

Em **Settings → Appearance**, você pode trocar de tema ou desativar **Efeitos Aero**. O inicializador preserva as preferências salvas. Leia o [guia de uso](docs/aero-blue/USAGE.md) para permissões, dados e limites de recuperação.

## Preparar um checkout

Siga os pré-requisitos do [guia de desenvolvimento](docs/aero-blue/DEVELOPMENT.md), incluindo Vite+ (`vp`), Electron e as dependências de compilação Linux.

```bash
git clone https://github.com/NewAlt3r/t3code-aero-blue.git
cd t3code-aero-blue
vp i
vp run --filter @t3tools/desktop ensure:electron
vp run build:desktop
vp run install:aero
t3aero
```

O Codex precisa estar instalado e autenticado separadamente para executar tarefas reais. O T3 Code funciona como interface para o agente; este fork não oferece assinatura ou cota própria.

Para desenvolvimento web com recarga automática, feche o desktop e use `vp run dev:aero`. Os comandos usam o mesmo estado local do Aero Blue; não execute os dois ao mesmo tempo.

## Instalação e versões

O comando e o ícone pessoais foram instalados a partir deste checkout. Ainda não há pacote distribuível do Aero Blue. Os downloads oficiais do T3 Code não incluem estas alterações.

O próximo marco continua sendo `v0.1.0-aero.1`, depois da validação do fluxo real. O rótulo Beta herdado na janela não representa uma Release publicada deste fork.

## Contribuir

Sugestões e problemas específicos do Aero Blue devem ser registrados nas Issues **deste fork**. Em mudanças visuais, inclua capturas antes/depois, ambiente usado e passos para reproduzir. Não publique conversas, credenciais ou arquivos privados nas capturas.

As [orientações de manutenção](docs/aero-blue/DEVELOPMENT.md) explicam como trabalhar em branches e sincronizar com o original. O [CONTRIBUTING.md](CONTRIBUTING.md) herdado descreve o processo do projeto upstream; regras sobre envio de contribuições a ele se aplicam quando você contribui com o T3 Code original.

## Origem, créditos e licença

Este projeto é um fork comunitário independente. Não é uma versão oficial do T3 Code e não tem afiliação oficial com a OpenAI.

- **Base:** [pingdotgg/t3code](https://github.com/pingdotgg/t3code).
- **Créditos:** T3 Tools Inc. e os contribuidores do T3 Code.
- **Licença:** [MIT](LICENSE), com o aviso de copyright original preservado.
- **Personalização proposta:** identidade e acabamento visual Aero Blue.

A licença do código não deve ser interpretada como autorização de uso de marcas de terceiros. Assets visuais adicionados ao fork devem ter autoria e licença registradas.
