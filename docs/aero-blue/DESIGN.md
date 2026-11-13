# Direção visual — Aero Blue

## Intenção

Trazer a sensação de uma interface Aero clássica para o fluxo de agentes do T3 Code: vidro azulado, profundidade discreta e controles brilhantes, com o conteúdo sempre legível. A referência de composição é uma área de trabalho com ondas claras, brilhos pontuais e janelas prateadas, reinterpretada em azul.

Esta página descreve a direção do projeto. A versão local já aplica ondas estáticas, paleta clara, esfera e acabamento de controles no cliente compartilhado pelo web e desktop. Conversas com conteúdo usam leitura estável; os demais critérios continuam sendo metas de validação.

## Paleta inicial proposta

| Papel            | Cor       | Uso pretendido                                    |
| ---------------- | --------- | ------------------------------------------------- |
| Fundo azul-gelo  | `#EAF5FF` | Fundo geral                                       |
| Superfície clara | `#F7FBFF` | Conversas e leitura                               |
| Vidro azul       | `#B8DDF2` | Painéis e barras                                  |
| Borda azul-prata | `#8FADC3` | Separação de superfícies                          |
| Destaque ciano   | `#168CCD` | Seleção e ações principais                        |
| Texto escuro     | `#17394F` | Conteúdo e rótulos                                |
| Detalhe verde    | `#76BE54` | Realce pontual, sem substituir estados semânticos |

A paleta é um ponto de partida. Cada combinação real precisa ser verificada antes de ser considerada pronta; os valores acima não constituem uma certificação de contraste.

## Tipografia e hierarquia

Preservar as fontes e os tamanhos configuráveis da base evita retirar preferências de leitura de uma ferramenta usada por longos períodos. O texto de trabalho tem prioridade sobre a marca: instruções em sentence case, uma única esfera como assinatura visual e nenhuma animação decorativa contínua.

## Acabamento

- Gradientes e brilho ficam nos controles e na estrutura. Texto longo e código usam fundos estáveis.
- Transparência e desfoque devem ter uma alternativa opaca para máquinas com menos recursos.
- Ondas e brilhos decorativos ficam longe de conteúdo, permissões e botões de decisão.
- Hover, foco, seleção e controles desabilitados precisam continuar distinguíveis.
- Cor não é o único sinal para erro, sucesso ou pedido de aprovação.
- Usar efeitos estáticos como padrão; evitar animações contínuas e respeitar redução de movimento.

## Composição da área de trabalho

A estrutura usa uma barra de título e uma barra de ferramentas globais, biblioteca lateral emoldurada, área principal de leitura e painel de mensagem inferior. A referência é a organização de aplicativos desktop da era Aero. A tela inicial apresenta o projeto e ações reais; não repete o campo centralizado de um chat genérico.

## Superfícies prioritárias

1. Barra lateral e navegação entre projetos/conversas.
2. Área da conversa e campo de mensagem.
3. Botões, menus, abas, caixas de diálogo e foco do teclado.
4. Blocos de código, terminal e revisão de alterações.
5. Configurações e pedidos de permissão.

O trabalho começa pela interface web, reaproveitada pelo desktop. A adaptação mobile depende de uma etapa própria e não deve ser presumida a partir de mudanças no CSS web.

## Critério visual de aceitação

Conferir a interface em janela pequena e maximizada, navegação por teclado, conteúdo longo, código, diálogos e estados de erro. Registrar capturas reais e revisar o comportamento sem efeitos de vidro. Não tratar um mockup como prova de uma implementação funcional.

## Assets e créditos

Preferir elementos vetoriais próprios para ondas e brilhos. Ao adicionar imagens, ícones ou fontes, registrar origem e licença junto do asset. As referências servem para orientar o estilo; não devem ser copiadas como se fossem material autoral do projeto.
