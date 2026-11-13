# Desenvolvimento e manutenção do Aero Blue

## Base e escopo

O Aero Blue deriva de `pingdotgg/t3code`. A base inicial desta preparação é o commit `d86ee1e26179441b24cd9ccdb2ca3444e2539a14`. O histórico e a licença originais são mantidos.

A etapa inicial modifica documentação. Não há implementação do tema ou validação de execução do aplicativo nesta etapa.

Leia o [AGENTS.md](../../AGENTS.md) antes de alterar o código. Consulte o [guia upstream de desenvolvimento](../operations/development.md) para requisitos e ferramentas; ele acompanha as mudanças da base e evita duplicar instruções que envelhecem.

## Preparar o checkout

```bash
git clone https://github.com/NewAlt3r/t3code-aero-blue.git
cd t3code-aero-blue
git remote add upstream https://github.com/pingdotgg/t3code.git
```

Confira `git remote -v`: `origin` deve apontar para seu fork e `upstream` para o original. Se `upstream` já existir, confira seu endereço em vez de adicioná-lo novamente.

Instale o Vite+ conforme o guia upstream e execute:

```bash
vp i
vp run dev --home-dir ./.t3-aero-blue-dev --no-seed
```

Use o endereço de pareamento impresso pelo dev runner. Não publique esse endereço. O diretório explícito mantém o estado de desenvolvimento separado dos dados de uso normal; não aponte o servidor de desenvolvimento para `~/.t3/userdata`.

Para testar o desktop, encerre o processo anterior e execute:

```bash
vp run dev:desktop --home-dir ./.t3-aero-blue-dev --no-seed
```

O modo de desenvolvimento usa as ferramentas e permissões da base original. Não ativa um tema Aero Blue até sua implementação.

## Desenvolver uma melhoria

Comece de uma `main` atualizada e crie uma branch por mudança:

```bash
git switch main
git pull --ff-only origin main
git switch -c feat/aero-blue-palette
```

Mantenha mudanças visuais próximas das superfícies a que pertencem, reaproveitando o sistema de temas. Evite misturar alterações de aparência com mudanças em autenticação, permissões ou execução de agentes.

Antes de enviar:

```bash
vp run check:changed
git diff --check
```

Para mudanças visuais, execute uma conferência real em web e desktop, com capturas antes/depois. Confira teclado, texto e código longos, diálogos, erros e aprovações. Registre o ambiente e os resultados na Issue ou pull request do fork. Não declare testes que não foram executados.

Faça commits pequenos, por exemplo `feat(aero): add blue palette` ou `fix(aero): improve input contrast`. Abra pull requests contra o seu próprio fork; contribuições ao projeto original seguem o processo upstream.

## Atualizar a partir do original

Comece com a árvore de trabalho limpa. Registre a sincronização numa branch para poder revisar os conflitos antes de atualizar a versão personalizada:

```bash
git switch main
git pull --ff-only origin main
git fetch upstream
git switch -c chore/sync-upstream-AAAA-MM-DD
git merge upstream/main
```

Troque a data do nome da branch pela data real. Se houver conflitos, resolva-os preservando o comportamento corrigido no upstream e a intenção visual do fork. Para abandonar a tentativa antes de concluir o merge, use `git merge --abort`.

Depois, execute as verificações pertinentes e revise as superfícies visuais alteradas. Envie a branch e integre-a à `main` do fork somente após a revisão. Não use `git reset --hard upstream/main` para atualizar a versão personalizada: isso descartaria os commits do fork na branch atual.

## Versões e distribuição

Use identificadores como `v0.1.0-aero.1` para distinguir o fork das versões upstream. Atualize o [CHANGELOG](../../CHANGELOG.md) com mudanças entregues, limitações e verificações realizadas. Crie tags e Releases apenas para marcos realmente prontos.

Os workflows herdados pertencem ao projeto original e podem depender de segredos, serviços e infraestrutura dos mantenedores. Não os habilite em bloco. Revise CI e publicação antes de ativá-los no fork. Os instaladores e canais de atualização oficiais não distribuem o Aero Blue.

Antes de oferecer binários, defina identidade de pacote, diretório de dados e atualização do fork para evitar colisões com a instalação oficial. Até essa etapa, use um checkout e estado de desenvolvimento separados.

## Arquivos locais

`.t3-aero-blue-dev/` é ignorado neste fork. Não versionar tokens, arquivos `.env`, conversas, bancos de dados de uso pessoal ou links de pareamento. Capturas públicas devem usar conteúdo de demonstração.
