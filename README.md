# Elo Bank

Projeto de portfólio de um banco digital fictício, com uma interface institucional em React e planejamento de Quality Assurance (QA), organização de trabalho no Jira e gestão de testes no Zephyr.

**Estado atual:** frontend demonstrativo implementado. O planejamento de QA está documentado; não há evidências de testes executados no Jira/Zephyr, integração com essas ferramentas ou suíte automatizada no projeto. Nenhum serviço financeiro está disponível.

## Tecnologias utilizadas

- React 19 e React DOM: componentes e interações locais.
- TypeScript 5, com verificação estrita.
- Vite 6 e plugin React: desenvolvimento e build estático.
- CSS próprio: layout responsivo, tokens visuais e estados de interação.
- Lucide React: ícones.
- Fontsource: fontes Manrope e Source Sans 3 distribuídas localmente.
- npm e `package-lock.json`: dependências e versões reproduzíveis.

Java, Spring Boot e PostgreSQL aparecem somente como direção futura em `PRODUCT.md`; não estão implementados. Não há backend, API, banco de dados, autenticação ou persistência.

## O que está implementado

- Landing page com apresentação, essência, próximas etapas, sobre e perguntas frequentes.
- Cabeçalho com menu móvel e navegação por âncoras.
- Navegação contextual exibida após a saída do cabeçalho da tela, com indicação da seção ativa e retorno ao topo.
- Perguntas expansíveis com HTML nativo.
- Smartphone e cartão ilustrativos, com nome e valores explicitamente fictícios.
- Estilos responsivos, link para pular ao conteúdo, tratamento de foco, atributos ARIA e respeito à preferência de movimento reduzido. A existência desses recursos não equivale a uma certificação de acessibilidade.

Os componentes em `src/components/dashboard/` e os dados em `src/content/dashboardDemo.ts` estão preservados, mas não são utilizados pela página atual. Não representam uma área do cliente funcional.

## Em construção e etapas futuras

A área do cliente e o cadastro exclusivo por operadores são etapas futuras descritas no produto, dependentes de histórias aprovadas. Não há autocadastro público, abertura de conta, consulta real de saldo ou transferências.

O trabalho de QA ainda precisa executar os cenários planejados, registrar evidências e defeitos, e organizar a rastreabilidade no Jira e no Zephyr. Automação, lint e integração contínua não estão configurados. Não há promessa de prazo ou requisitos adicionais para essas etapas.

## Executar localmente

Ambiente utilizado nesta revisão: Node.js 24.21.0 e npm 11.19.0.

```sh
npm ci
npm run dev
```

Abra a URL informada pelo Vite (normalmente `http://127.0.0.1:5173`). A instalação limpa com `npm ci` é a orientação de reprodução; não foi executada nesta revisão, que usou as dependências já instaladas.

```sh
npm run typecheck
npm run build
npm run preview
```

O build gera `dist/`. Não é necessário configurar variáveis de ambiente para a versão atual. Variáveis expostas pelo Vite no frontend são públicas e não devem conter segredos.

## Estrutura

```text
src/
  App.tsx                  Composição da página
  main.tsx                 Entrada e importação das fontes
  components/              Marca, navegação e componentes visuais
  content/                 Textos e dados fictícios
  styles/                  CSS e tokens
public/                    Favicon e recurso fotográfico histórico
PRODUCT.md                 Escopo e limites do produto
DESIGN.md                  Decisões visuais e origem dos recursos
QA.md                      Plano de testes e proposta de uso de Jira/Zephyr
```

## QA, Jira e Zephyr

O foco do portfólio é demonstrar análise de escopo, planejamento de testes, rastreabilidade e comunicação de qualidade. Consulte [o plano de QA](QA.md) para os cenários propostos, critérios de execução e modelo de registro de defeitos. Os identificadores desse documento são locais, não chaves de tickets reais.

Jira é a ferramenta pretendida para organizar histórias e defeitos; Zephyr, para casos, ciclos e evidências de execução. Nenhum projeto, ticket, ciclo ou resultado foi criado nessas ferramentas nesta preparação.

## Verificações desta revisão

Executadas em 11/11/2026 (America/Sao_Paulo):

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | Aprovado, sem erros |
| `npm run build` | Aprovado, Vite 6.4.6 gerou `dist/` |
| `npm run lint` | Indisponível: script `lint` ausente |
| Testes funcionais, visuais e acessibilidade em navegador | Não executados nesta revisão |
| Testes automatizados | Suíte e script não encontrados |

Build e análise de tipos não comprovam o funcionamento de todos os fluxos nem substituem testes de QA.

## Publicação e privacidade

O `.gitignore` exclui dependências, builds, caches, ambientes, chaves, arquivos locais de credenciais e temporários. Ele reduz exposição acidental, mas não detecta segredos inseridos no código e não remove arquivos já rastreados.

A revisão textual não identificou credenciais nos arquivos destinados à publicação. Um caminho pessoal foi removido de `DESIGN.md`. Marina, saldos e movimentações são dados de demonstração identificados como fictícios no código. A revisão não é uma auditoria de segurança ou de metadados binários.

A fotografia histórica em `public/images/` não está referenciada na interface; sua origem e atribuição estão registradas em `DESIGN.md`. Arquivos em `public/` são copiados pelo Vite para o build mesmo sem uso. Fontes e ícones mantêm as licenças de seus respectivos pacotes. Não foi adicionada uma licença para o código: a escolha cabe ao titular do projeto.

Repositório público: https://github.com/bcosta-dev/EloBank. Branch principal: `main`. Consulte o histórico do GitHub para acompanhar as versões publicadas.
