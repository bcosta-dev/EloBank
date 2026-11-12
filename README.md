# Elo Bank

Elo Bank é um projeto de portfólio de Engenharia de Software com foco em Quality Assurance (QA). A proposta é desenvolver um banco digital fictício e organizar requisitos, testes e defeitos no Jira e no Zephyr.

Hoje, o projeto tem uma página institucional em React e um plano de testes. Não há serviços financeiros, backend, autenticação ou persistência. O uso de Jira e Zephyr está planejado; ainda não há registros de execução ou integração com essas ferramentas documentados no repositório.

## O que está implementado

- Página com apresentação, essência, próximas etapas, sobre e perguntas frequentes.
- Menu móvel, links entre seções e navegação contextual com indicação da seção ativa e retorno ao topo.
- Perguntas expansíveis com HTML nativo.
- Smartphone e cartão ilustrativos, com nome e valores fictícios.
- Layout responsivo, link para pular ao conteúdo, tratamento de foco, atributos ARIA e suporte à preferência de movimento reduzido. A acessibilidade ainda precisa ser validada em testes.

Os componentes em `src/components/dashboard/` e os dados em `src/content/dashboardDemo.ts` estão preservados, mas não são usados na página atual.

## Próximas etapas

A área do cliente e o cadastro exclusivo por operadores dependem de histórias aprovadas. Não há autocadastro público, abertura de conta, consulta real de saldo ou transferências.

No QA, falta executar os casos planejados, registrar evidências e defeitos e estabelecer a rastreabilidade no Jira e no Zephyr. Automação de testes, lint e integração contínua ainda não estão configurados.

## Tecnologias

React 19, React DOM, TypeScript 5 em modo estrito, Vite 6 com plugin React e CSS próprio. Os ícones são do Lucide React; as fontes Manrope e Source Sans 3 são locais, via Fontsource. As dependências são gerenciadas pelo npm e pelo `package-lock.json`.

Java, Spring Boot e PostgreSQL são uma direção futura descrita em [PRODUCT.md](PRODUCT.md), não tecnologias implementadas nesta versão.

## Executar localmente

Ambiente usado nas verificações registradas: Node.js 24.21.0 e npm 11.19.0.

```sh
npm ci
npm run dev
```

Abra a URL informada pelo Vite, normalmente `http://127.0.0.1:5173`.

```sh
npm run typecheck
npm run build
npm run preview
```

O build gera `dist/`. A versão atual não exige variáveis de ambiente. Variáveis expostas pelo Vite são públicas e não devem conter segredos. A instalação com `npm ci` é a orientação para reproduzir o ambiente; as verificações abaixo usaram dependências já instaladas.

## Documentação e QA

- [PRODUCT.md](PRODUCT.md): requisitos e limites do produto.
- [DESIGN.md](DESIGN.md): decisões visuais, interações e origem dos recursos.
- [QA.md](QA.md): escopo, casos de teste, critérios e rastreabilidade.

O Jira será usado para requisitos, histórias e defeitos; o Zephyr, para casos, ciclos, execuções e evidências. Os IDs do plano de QA são locais, não chaves de tickets reais.

O código está em `src/`: `App.tsx` compõe a página, `main.tsx` carrega a aplicação e as fontes, e as pastas `components/`, `content/` e `styles/` reúnem componentes, textos, dados fictícios e CSS. `public/` contém o favicon e uma fotografia histórica sem uso na interface.

## Verificações registradas

Resultados de 11/11/2026 (America/Sao_Paulo):

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | Aprovado, sem erros |
| `npm run build` | Aprovado, Vite 6.4.6 gerou `dist/` |
| `npm run lint` | Indisponível: script ausente |
| Testes funcionais, visuais e de acessibilidade em navegador | Não executados nessa revisão |
| Testes automatizados | Suíte e script não encontrados |

Build e análise de tipos não substituem testes funcionais. A revisão de documentação de 12/11/2026 não executou novos testes.

## Dados e recursos

Marina, saldos e movimentações são fictícios. A revisão textual anterior não identificou credenciais e removeu um caminho pessoal de `DESIGN.md`; não incluiu auditoria de segurança ou de metadados binários.

O `.gitignore` exclui dependências, builds, ambientes, credenciais locais, caches e temporários. Isso não protege segredos inseridos no código nem remove arquivos já rastreados.

A fotografia histórica tem origem e atribuição registradas em `DESIGN.md`. Mesmo sem uso, arquivos de `public/` são copiados para o build. Fontes e ícones seguem as licenças dos respectivos pacotes. O código ainda não tem uma licença definida pelo proprietário.

Repositório: [bcosta-dev/EloBank](https://github.com/bcosta-dev/EloBank), branch `main`.
