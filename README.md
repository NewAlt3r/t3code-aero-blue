# T3 Code Aero Blue

Uma versão independente do [T3 Code](https://github.com/pingdotgg/t3code), com a proposta de trazer o visual **Frutiger Aero** para uma interface gráfica de agentes de programação, começando pelo uso com Codex no Linux Mint.

Azul-gelo, superfícies de vidro, degradês suaves e botões com brilho: uma interface pessoal, feita para ser refinada ao longo do tempo, mantendo a base funcional do T3 Code.

> **Estado atual: preparação do projeto.** Este repositório contém o código original e a documentação inicial do Aero Blue. O tema ainda não foi implementado, não há capturas da versão personalizada nem instaladores próprios publicados.

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
vp run dev --home-dir ./.t3-aero-blue-dev --no-seed
```

Abra o endereço de pareamento exibido pelo processo. Para o cliente desktop, consulte o [guia do fork](docs/aero-blue/DEVELOPMENT.md). As instruções acima executam a base de desenvolvimento; ainda não ativam um tema Aero Blue.

O Codex precisa estar instalado e autenticado separadamente para executar tarefas reais. O T3 Code funciona como interface para o agente; este fork não oferece uma assinatura ou uma cota de modelos própria.

## Instalação e versões

Ainda não há release do Aero Blue. Os downloads oficiais e os pacotes citados na documentação original instalam **T3 Code original**, sem as personalizações planejadas aqui.

A primeira versão visual prevista é `v0.1.0-aero.1`. Ela só será publicada depois que o tema estiver implementado e validado. Datas e funcionalidades podem mudar conforme o desenvolvimento.

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
