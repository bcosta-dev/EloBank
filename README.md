
# Elo Bank

Estou desenvolvendo o Elo Bank, um banco digital fictício que criei para colocar em prática meus conhecimentos de Engenharia de Software, principalmente na área de Quality Assurance (QA).

Minha ideia é construir um sistema que eu possa testar de verdade, desde a análise dos requisitos até a execução dos testes e o registro de bugs. Para organizar esse processo, estou utilizando o Jira e o Zephyr Essential.

O projeto ainda está em desenvolvimento. Atualmente, a Landing Page está implementada e passou pela primeira etapa de testes funcionais. As funcionalidades bancárias serão desenvolvidas gradualmente.

## Tecnologias

No frontend, estou utilizando:

- React
- TypeScript
- Vite
- HTML e CSS
- Lucide React

Para o backend, pretendo trabalhar com Java, Spring Boot e PostgreSQL.

Na parte de qualidade de software, utilizo:

- Jira — Organização de histórias de usuário e defeitos
- Zephyr Essential — Gerenciamento e execução dos testes
- DevTools — Testes de responsividade e inspeção da interface

## O que já foi desenvolvido

Até agora, desenvolvi a página inicial do Elo Bank, incluindo:

- Interface responsiva para computadores e celulares.
- Menu de navegação e acesso às seções da página.
- Barra de navegação contextual durante a rolagem.
- Seção de perguntas frequentes (FAQ).
- Navegação por teclado.
- Elementos visuais representando o aplicativo e o cartão do banco.

As funcionalidades bancárias, como cadastro de clientes, abertura de contas e transferências, ainda serão implementadas.

## Qualidade de Software (QA)

Meu foco principal no Elo Bank é trabalhar com QA.

Estou organizando os requisitos e as histórias de usuário no Jira, desenvolvendo casos de teste e acompanhando as execuções pelo Zephyr Essential.

### Testes da Landing Page

Concluí a primeira etapa de testes funcionais da Landing Page, abrangendo duas histórias de usuário:

- **EL-3:** Navegação pela página inicial.
- **EL-4:** Navegação em dispositivos móveis.

Foram realizados testes de carregamento, navegação entre seções, funcionamento do FAQ, responsividade e acessibilidade básica por teclado.

**Resultados da execução final:**

| Indicador | Resultado |
|---|---|
| Casos de teste executados | 10 |
| Casos aprovados | 10 |
| Defeitos identificados | 1 |
| Defeitos corrigidos | 1 |
| Defeitos pendentes | 0 |

Durante os testes, identifiquei um problema na navegação contextual da página, registrado como **EL-5** no Jira.

Após a correção, executei novamente o teste e confirmei que o comportamento estava de acordo com o esperado.

O histórico da falha e do reteste aprovado foi preservado no Zephyr Essential.

### Documentação dos testes

Organizei os resultados e as evidências em uma documentação específica, disponível no próprio repositório.

**[Consultar documentação de QA da Landing Page](./docs/qa/landing-page/README.md)**

**[Visualizar relatório de execução dos testes (PDF)](./docs/qa/landing-page/relatorio-execucao.pdf)**

### Próximas etapas de QA

Conforme as funcionalidades bancárias forem implementadas, pretendo ampliar os testes para cadastro de clientes, autenticação, abertura de contas e transferências.

Também pretendo trabalhar com testes de API e automação utilizando Java, JUnit e outras ferramentas adequadas.

## Como executar

Para executar o projeto localmente, é necessário ter o Node.js instalado.

Clone o repositório:

```bash
git clone https://github.com/bcosta-dev/EloBank.git
```

Entre na pasta:

```bash
cd EloBank
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Depois, abra o endereço informado no terminal, normalmente `http://localhost:5173`.

---

**Status:** em desenvolvimento.

Landing Page implementada e testes funcionais concluídos. Funcionalidades bancárias em planejamento.
