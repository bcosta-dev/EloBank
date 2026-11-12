# Plano de QA — Elo Bank

Este plano ainda não foi executado. Jira e Zephyr são as ferramentas previstas para organizar o trabalho de QA; não há registros de ciclos ou resultados nessas ferramentas documentados aqui.

## Escopo e abordagem

Validar a landing page existente, navegação, menu móvel, FAQ, responsividade, conteúdo demonstrativo e acessibilidade. Usar PRODUCT.md e o comportamento implementado como referências; divergências devem ser registradas para esclarecimento, não transformadas em requisitos presumidos. Autenticação, cadastro e operações bancárias estão fora do escopo atual.

## Requisitos que serão validados

Os vínculos abaixo usam requisitos e decisões já descritos nos documentos do projeto. Não existem chaves de requisitos do Jira registradas neste plano.

| Referência | Casos relacionados |
| --- | --- |
| PRODUCT.md: página institucional responsiva e acessível; DESIGN.md: navegação e interações | QA-01, QA-02, QA-03, QA-04, QA-05, QA-06, QA-07, QA-10 |
| PRODUCT.md: projeto fictício, sem operações financeiras ou autocadastro | QA-08 |
| PRODUCT.md: verificações de build e TypeScript; carregamento da página gerada | QA-09 e comandos registrados no README |

A demonstração estática descrita em DESIGN.md foi autorizada após o escopo inicial, que não previa prévias de cliente. Ela não constitui uma área funcional. Outras divergências devem ser esclarecidas antes de definir a aceitação.

## Casos de teste e critérios de aceitação

Todos os casos estão **não executados**. As prioridades são propostas; os resultados esperados orientam a aceitação de cada caso e devem ser revisados antes da execução. Os IDs QA-01 a QA-10 são locais e devem ser preservados ao cadastrar os casos no Zephyr.

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

## Rastreabilidade no Jira e no Zephyr

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

## Execuções, evidências e defeitos

As únicas verificações registradas são TypeScript e build, descritas no README. Lint não está configurado. Não há execução funcional em navegador, ciclo no Zephyr ou defeito documentado neste plano. Isso não significa que a aplicação esteja livre de defeitos. A revisão de documentação de 12/11/2026 não executou testes.
