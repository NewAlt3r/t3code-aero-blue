# Histórico do Aero Blue

Este arquivo registra apenas mudanças específicas deste fork. O histórico completo da base permanece no Git e no [projeto T3 Code](https://github.com/pingdotgg/t3code).

## Não lançado

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

Esta é uma prévia em desenvolvimento, sem instalador, tag ou Release próprios. As alterações se concentram na aparência e no ambiente local de prévia; o motor dos agentes permanece o da base T3 Code.
