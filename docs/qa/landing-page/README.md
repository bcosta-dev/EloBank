
# QA — Landing Page | Elo Bank

Documentação dos testes funcionais realizados na Landing Page do Elo Bank, um projeto fictício de banco digital desenvolvido para prática de Engenharia de Software e Quality Assurance (QA).

Esta etapa teve como objetivo validar o comportamento da interface, identificar possíveis defeitos e garantir o atendimento aos critérios de aceitação definidos.

## 1. Escopo dos testes

Os testes contemplaram duas histórias de usuário documentadas no Jira:

| História | Descrição | Status |
|---|---|---|
| EL-3 | Navegação pela página inicial | Concluída |
| EL-4 | Navegação em dispositivos móveis | Concluída |

Foram validados:

- Carregamento da página inicial
- Navegação entre seções
- Navegação contextual durante a rolagem
- Retorno ao topo
- Funcionamento das perguntas frequentes (FAQ)
- Layout responsivo
- Abertura e fechamento do menu mobile
- Navegação pelo menu mobile
- Navegação por teclado

## 2. Ferramentas utilizadas

| Ferramenta | Finalidade |
|---|---|
| Jira | Gerenciamento de histórias e defeitos |
| Zephyr Essential | Casos de teste, execuções e rastreabilidade |
| Chrome / Edge DevTools | Validação responsiva e inspeção da interface |
| Gherkin / BDD | Estruturação dos cenários de teste |

## 3. Casos de teste

Os casos foram documentados e executados no Zephyr Essential, vinculados ao ciclo **EL-R1 — Landing Page**.

| ID | Caso de teste | Resultado final |
|---|---|---|
| EL-T5 | Validar carregamento da página inicial | Passou |
| EL-T6 | Validar navegação entre seções | Passou |
| EL-T7 | Validar navegação contextual | Passou |
| EL-T8 | Validar retorno ao topo | Passou |
| EL-T9 | Validar perguntas frequentes | Passou |
| EL-T10 | Validar layout responsivo | Passou |
| EL-T11 | Validar abertura do menu móvel | Passou |
| EL-T12 | Validar fechamento do menu móvel | Passou |
| EL-T13 | Validar navegação pelo menu móvel | Passou |
| EL-T14 | Validar navegação por teclado | Passou |

## 4. Resultados da execução

| Indicador | Resultado |
|---|---|
| Casos de teste executados | 10 |
| Casos aprovados na execução final | 10 |
| Taxa de aprovação final | 100% |
| Defeitos identificados | 1 |
| Defeitos corrigidos | 1 |
| Defeitos pendentes | 0 |
| Ciclo de testes | EL-R1 |

A taxa de aprovação considera o resultado final de cada caso de teste, após as correções e os retestes necessários.

## 5. Defeito identificado — EL-5

### Descrição

Durante a execução do caso **EL-T7 — Validar navegação contextual**, foi identificado um problema na identificação da seção ativa.

Ao acessar a seção "Dúvidas", o indicador visual de navegação não era atualizado corretamente em determinadas condições.

### Comportamento esperado

A navegação contextual deve identificar e destacar corretamente a seção ativa durante a rolagem da página.

### Comportamento observado

O destaque da seção "Dúvidas" não era ativado corretamente ao chegar ao FAQ com as perguntas recolhidas.

### Tratamento do defeito

O problema foi registrado no Jira como **EL-5**, corrigido e posteriormente validado por meio de um reteste.

| Data | Execução | Resultado |
|---|---|---|
| 12/11/2026 | Teste inicial | Falha |
| 20/11/2026 | Reteste após correção | Sucesso |

As duas execuções foram preservadas no histórico do Zephyr Essential.

**Status final do defeito:** Concluído.

## 6. Testes de responsividade

A Landing Page foi validada em resolução mobile de **375 × 812 px**, contemplando:

- Adaptação dos elementos à largura da tela
- Legibilidade dos textos
- Organização dos componentes
- Ausência de rolagem horizontal indevida
- Funcionamento do menu mobile
- Navegação entre seções
- Funcionamento do FAQ

Durante a validação, também foi identificada uma oportunidade de melhoria estética no espaçamento da ilustração do celular na seção inicial.

Essa observação não impediu a aprovação funcional do caso EL-T10.

## 7. Rastreabilidade

A rastreabilidade foi organizada entre histórias de usuário, critérios de aceitação, casos de teste e defeitos.

| Item | Identificador |
|---|---|
| Navegação pela página inicial | EL-3 |
| Navegação em dispositivos móveis | EL-4 |
| Defeito de navegação contextual | EL-5 |
| Ciclo de testes | EL-R1 |
| Casos de teste | EL-T5 a EL-T14 |

Os registros completos permanecem documentados no Jira e no Zephyr Essential.

## 8. Relatório de execução

O relatório consolidado apresenta os resultados da execução final e o histórico do defeito identificado.

**[Visualizar relatório de QA da Landing Page (PDF)](./relatorio-execucao.pdf)**

O documento foi preparado para apresentação em portfólio, sem exposição de informações pessoais ou links internos do ambiente Jira.

## 9. Conclusão

A etapa de testes funcionais da Landing Page do Elo Bank foi concluída com sucesso.

Os dez casos de teste apresentaram resultado final aprovado, atendendo aos critérios de aceitação das histórias EL-3 e EL-4.

Durante a execução, foi identificado um defeito funcional, posteriormente corrigido e validado por reteste.

A documentação demonstra a aplicação prática de atividades de QA, incluindo:

- Planejamento e documentação de testes
- Execução funcional e responsiva
- Identificação e registro de defeitos
- Validação de correções
- Testes de regressão
- Rastreabilidade entre requisitos, testes e defeitos

---

**Elo Bank — Qualidade de Software**

Documentação da etapa de testes funcionais da Landing Page.
