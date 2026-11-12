# Plano de QA — Elo Bank

Estado: planejamento proposto, ainda não executado. Este documento não comprova aprovação funcional nem existência de registros no Jira ou Zephyr.

## Escopo e abordagem

Validar a landing page existente, navegação, menu móvel, FAQ, responsividade, conteúdo demonstrativo e acessibilidade. Usar PRODUCT.md e o comportamento implementado como referências; divergências devem ser registradas para esclarecimento, não transformadas em requisitos presumidos. Autenticação, cadastro e operações bancárias estão fora do escopo atual.

## Cenários propostos

Todos os casos abaixo estão **não executados**. Prioridade é uma sugestão para a futura rodada.

| ID local | Prioridade | Procedimento | Resultado esperado |
| --- | --- | --- | --- |
| QA-01 | Alta | Abrir a página e acionar links do cabeçalho e rodapé | Destinos correspondentes acessíveis e conteúdo legível |
| QA-02 | Alta | Em largura móvel, abrir menu, selecionar link e testar Escape | Menu abre/fecha; Escape devolve foco ao botão |
| QA-03 | Alta | Rolar além do cabeçalho, usar navegação contextual e voltar ao topo | Barra aparece, seção correspondente é indicada e destino não fica encoberto |
| QA-04 | Média | Abrir e fechar cada pergunta com mouse e teclado | Resposta correspondente exibida e recolhida |
| QA-05 | Alta | Percorrer controles com Tab/Shift+Tab e usar pular conteúdo | Foco visível, ordem coerente e acesso ao conteúdo principal |
| QA-06 | Alta | Inspecionar a página em 320, 375, 800, 801, 1100 e 1440 px e com zoom de 200% | Ausência de cortes impeditivos, sobreposições de conteúdo e perda de controles |
| QA-07 | Média | Ativar preferência de movimento reduzido e navegar | Rolagem e transições respeitam a preferência |
| QA-08 | Alta | Ler hero, próximas etapas, FAQ e rodapé | Caráter fictício explícito, sem oferecer operações ou autocadastro |
| QA-09 | Média | Inspecionar console e rede ao carregar o build e navegar | Sem erros de aplicação ou recursos essenciais ausentes |
| QA-10 | Média | Avaliar nomes acessíveis, contraste e leitura com tecnologia assistiva | Registrar barreiras encontradas; não presumir conformidade pelo uso de ARIA |

Sugestão de matriz: Chrome e Firefox em desktop, Safari em dispositivo disponível e navegador móvel real. Registrar versões, sistema, viewport e limitações; emulação não substitui dispositivo real. A matriz ainda não foi executada.

## Organização proposta no Jira e no Zephyr

1. Revisar histórias e critérios de aceite com base no escopo existente antes de cadastrar itens.
2. Registrar histórias e defeitos no Jira; não criar histórias de serviços bancários inexistentes.
3. Cadastrar os casos no Zephyr com pré-condições, dados fictícios, passos, resultado esperado e vínculo ao item correspondente no Jira.
4. Criar um ciclo para uma versão identificada por commit; registrar ambiente, executor, data, resultado real e evidências por caso.
5. Vincular falhas a defeitos, executar reteste após correção e regressão das áreas afetadas.

A edição do Zephyr e sua configuração ainda não foram definidas. Os passos são uma proposta de processo, não instruções específicas de uma edição ou integração já instalada.

## Registro de defeitos e evidências

Modelo: título objetivo; versão/commit; ambiente; pré-condições; passos reproduzíveis; resultado esperado e fonte; resultado observado; frequência; impacto; severidade e prioridade propostas; evidências; caso relacionado; resultado de reteste.

Publicar somente evidências com dados fictícios, sem tokens, cookies, caminhos pessoais, contas reais ou informações privadas de Jira. Não registrar um caso como aprovado sem execução. Usar estados como não executado, aprovado, reprovado e bloqueado, conforme os estados disponíveis na ferramenta.

## Critérios propostos para concluir uma rodada

Build e TypeScript aprovados; casos prioritários executados; falhas relevantes corrigidas e retestadas ou explicitamente aceitas; limitações e evidências registradas. Esses critérios ainda não foram cumpridos como rodada funcional. Quantidades de testes aprovados, cobertura e taxa de defeitos só devem ser divulgadas após execução comprovada.

## Evidências disponíveis nesta preparação

Somente as verificações locais de TypeScript e build descritas no README. Lint não configurado. Nenhum teste em navegador ou ciclo no Zephyr foi executado nesta preparação.
