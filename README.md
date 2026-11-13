# T3 Code Aero Blue

Uma versão independente do [T3 Code](https://github.com/pingdotgg/t3code), com a proposta de trazer o visual **Frutiger Aero** para uma interface gráfica de agentes de programação, começando pelo uso com Codex no Linux Mint.

Azul-gelo, superfícies de vidro, degradês suaves e botões com brilho: uma interface pessoal, feita para ser refinada ao longo do tempo, mantendo a base funcional do T3 Code.

> **Estado atual: primeira prévia visual de desenvolvimento.** O tema claro Aero Blue já inclui paleta azul-gelo, ondas vetoriais, identidade própria, controles com degradê e superfícies de conversa. A interface web foi aberta no Linux Mint/XFCE. O desktop, o empacotamento e a validação completa ainda estão pendentes; não há instalador próprio publicado.

## Objetivos

- Criar uma identidade azul inspirada no Aero clássico e no Frutiger Aero.
- Manter conversas, código e permissões fáceis de ler.
- Começar pelo cliente web e pelo desktop Linux, que compartilham a interface web.
- Preservar o funcionamento dos agentes e acompanhar correções do projeto original.
- Evoluir com mudanças pequenas, capturas de tela e versões identificáveis.

O primeiro ambiente de referência é **Linux Mint com XFCE**. Isso é uma prioridade de desenvolvimento, não uma declaração de compatibilidade já testada. A interface mobile não faz parte da primeira etapa visual.

## Documentação do Aero Blue

| Documento                                                     | Conteúdo                                               |
| ------------------------------------------------------------- | ------------------------------------------------------ |
| [Direção visual](docs/aero-blue/DESIGN.md)                    | Paleta proposta, acabamento, legibilidade e desempenho |
| [Evolução do projeto](docs/aero-blue/ROADMAP.md)              | Etapas e critérios para as primeiras versões           |
| [Desenvolvimento e manutenção](docs/aero-blue/DEVELOPMENT.md) | Executar, validar e atualizar o fork                   |
| [Histórico de alterações](CHANGELOG.md)                       | Registro das mudanças específicas do Aero Blue         |

A [apresentação original do T3 Code](README.upstream.md) foi preservada. Os [guias originais](docs/README.md), as [instruções de desenvolvimento](docs/operations/development.md) e a [documentação de temas](docs/user/appearance.md) continuam disponíveis.

## Começar a desenvolver

Siga os pré-requisitos em [Development](docs/operations/development.md#first-checkout), incluindo a instalação do Vite+ (`vp`). O Vite+ fornece a versão de Node fixada pelo projeto.

```bash
git clone https://github.com/NewAlt3r/t3code-aero-blue.git
cd t3code-aero-blue
vp i
vp run dev:aero
```

Abra o endereço de pareamento exibido pelo processo. O comando publica a paleta em um ambiente local isolado e seleciona o Aero Blue. Os dados ficam em `.t3-aero-blue-dev/`, sem alterar sua instalação normal. O comando reaplica o tema ao iniciar. Para sair dele durante o uso, escolha outro em **Settings → Appearance**. Para o cliente desktop, consulte o [guia do fork](docs/aero-blue/DEVELOPMENT.md).

O Codex precisa estar instalado e autenticado separadamente para executar tarefas reais. O T3 Code funciona como interface para o agente; este fork não oferece uma assinatura ou uma cota de modelos própria.

## Instalação e versões

Ainda não há release do Aero Blue. Os downloads oficiais e os pacotes citados na documentação original instalam **T3 Code original**, sem as personalizações planejadas aqui.

A prévia atual é o primeiro passo para `v0.1.0-aero.1`. Ainda não há tag ou Release: a validação completa e o desktop continuam pendentes. Datas e funcionalidades podem mudar conforme o desenvolvimento.

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
