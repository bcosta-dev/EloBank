# Elo Bank — sistema visual

## Direção
A interface usa azul-noturno e verde-menta, com smartphone e cartão conceitual na seção inicial. Slogan: “Conexões que ficam.” Referências bancárias orientam apenas princípios de legibilidade, impacto, organização e acabamento; não são reproduzidas marcas ou composições.

## Paleta e tipografia
- Azul-noturno #101D35: hero, navegação, cartão principal e rodapé.
- Menta #8DE0BD: ação principal, detalhes da marca e superfícies de apoio.
- Branco #FFFFFF: fundo editorial; cinza frio #F5F7FA: próximas etapas.
- Grafite #252C35: texto; cinza #526174: apoio em superfícies claras.
- Verde suave #DFF3E9: etapa de cadastro; apoio #B9C8D9 em superfícies escuras.
- Manrope 500/600 para marca e títulos; Source Sans 3 400/600 para leitura e controles. Fontes locais via Fontsource.
- Título principal fluido, até 67,2px, entrelinha 1,12 e tracking -0,05em. Títulos de seção até 52px; corpo 18px, com linhas curtas e alinhamento à esquerda.

## Composição
O hero mantém o título, apoio e botões à esquerda. À direita, o smartphone vertical e o cartão horizontal recuperam a composição anterior. Moldura metálica, câmera discreta, tela clara e sombras em duas escalas trazem profundidade. O cartão azul acetinado foi refinado para 282 × 178px (aproximadamente 25% maior que a versão de 226 × 142px) e deslocado para a base: sobrepõe apenas a região inferior do aparelho, preservando saldo, rótulo de demonstração e movimentações. Não há elementos decorativos adicionais.

Desktop:

    marca                      navegação + sobre
    título + texto             smartphone + cartão
    ação + próxima seção       dados fictícios visíveis
    essência                   três princípios editoriais
    identidade conceitual      área do cliente futura
    identidade conceitual      cadastro acompanhado futuro
    assinatura editorial       apresentação do projeto
    dúvidas                    perguntas expansíveis

Mobile: uma coluna, texto antes da composição, menu expansível no fluxo e etapas empilhadas na ordem de leitura. Breakpoints em 1100, 800 e 480px; conteúdo acomodado desde 320px. Container máximo de 1248px, margens de 56/32/20px. Espaçamentos em múltiplos de 4px; seções 112px em desktop e 72px no celular.

## Componentes
- O cartão ilustrativo da seção de possibilidades permanece inalterado. O hero apresenta o smartphone e o cartão sobreposto, em HTML/CSS estático. Sem fotografia, dashboard desktop ou interface bancária funcional.
- HeroShowcase reúne a marca, a saudação a Marina, o saldo ilustrativo, duas movimentações fictícias e o slogan. Smartphone de 292 × 578px em desktop, com tela clara e moldura refinada; cartão de proporção bancária com chip apenas gráfico, sem número ou bandeira.
- Brand, Header, ActionLink, SectionHeading, ServiceCard e AccordionItem preservam a estrutura reutilizável.
- ActionLink usa formato de cápsula, alvo mínimo de 54px e setas decorativas. ServiceCard recebe status textual e conteúdo editorial; não é clicável.
- Superfícies principais com raio de 24px; cartões ilustrativos 14–18px. Princípios e FAQ usam separadores para organizar a leitura, sem caixas desnecessárias.

## Interações e acessibilidade
Menu móvel com aria-expanded, aria-controls, fechamento por seleção, Escape com devolução do foco e reset ao passar para desktop. FAQ em details/summary nativos. Feedback de hover nos links, mudança de fundo nos botões e deslocamento de 2px nas setas respondem à ação do usuário. Sem animação contínua ou revelações que escondam conteúdo.

Idioma pt-BR, um h1, landmarks, link de pular navegação, títulos ordenados, SVGs decorativos ocultos de leitores de tela e foco visível com contraste em fundos claros e escuros. Composição em figure com legenda visível e descrição acessível única via role img, explicitando saldo fictício e indisponibilidade de operações. Conteúdo interno decorativo evita leitura redundante. Sem animação, tab stops desnecessários ou controles desabilitados. O foco visível dos controles reais da landing permanece. Movimento reduzido desativa transições e rolagem suave. Links e botões mantêm áreas de toque confortáveis.

## Conteúdo e limites
As regras de negócio estão em [PRODUCT.md](PRODUCT.md). A página informa que o banco é fictício e não operacional. As próximas etapas apresentam somente área do cliente e cadastro exclusivo por operadores já previstos nos requisitos. Não há catálogo financeiro aprovado: nenhum produto, prazo, benefício, taxa ou funcionalidade adicional foi presumido. Cartões são expressão visual, não especificação de produto. Sem backend, formulários, autenticação, coleta de dados ou autocadastro.

## Demonstração visual

A prévia estática de smartphone e cartão foi recuperada de uma versão anterior. Somente HeroShowcase.tsx e seus estilos foram restaurados. A prévia foi autorizada posteriormente ao escopo inicial de PRODUCT.md, sem ampliar as funcionalidades bancárias. Os componentes e dados do dashboard desktop permanecem no código, sem uso.

A tela mostra Marina, saldo fictício de R$ 12.480,00 e dois exemplos em 09 nov: entrada R$ 250,00 às 09:20 e café R$ 18,00 às 08:15. A lista é exemplificativa, não um extrato completo. “Demonstração · Dados fictícios” aparece na tela e a legenda informa que cartão e interface não oferecem operações.

O aparelho usa sombras de contato e ambiente suaves. O cartão fica na base, sem rotação. Em telas estreitas o aparelho chega a 266px e o cartão a 262px; não se reduz a composição inteira com scale/zoom. A região do cartão começa abaixo das movimentações em todos os breakpoints.

## Registro da fotografia anterior (fora da interface)
- Autor: cottonbro studio.
- Plataforma e identificador: Pexels, foto 3206080.
- Página original: https://www.pexels.com/photo/selective-focus-photo-of-smiling-man-looking-at-his-phone-while-holding-cup-3206080/
- Arquivo de origem: https://images.pexels.com/photos/3206080/pexels-photo-3206080.jpeg?auto=compress&cs=tinysrgb&w=1000
- Licença consultada em 09/11/2026: https://www.pexels.com/license/
- A página da foto identifica licença Free, câmera Sony ILCE-7SM2, tomada em 27/10/2019 e publicada em 10/11/2019.
- A licença Pexels permite uso em websites, uso comercial e adaptações; atribuição é opcional e foi incluída. Não permite sugerir endosso, uso ofensivo de pessoas identificáveis, revenda de cópias sem alteração ou redistribuição em plataformas de imagens.
- Uso atual: nenhum. Arquivo preservado apenas como recurso histórico; não é referenciado ou carregado pelo hero.
- Arquivo local: public/images/elo-editorial-cottonbro-3206080.jpg (169986 bytes). Sem hotlink ou requisição externa de imagem no carregamento.
- SHA-256: 5a625adf633d121633013f5cefb11ec9592bf17187bdedbead9775aba15723ba.
- Tratamento: redimensionamento/compressão do CDN Pexels, recorte responsivo, máscara de bordas e saturação CSS de 94%; sem alteração destrutiva do arquivo, geração por IA ou coloração artificial da pele.

## Navegação contextual
ContextNavigation preserva o cabeçalho original e aparece somente quando ele sai inteiramente da viewport. Uma região sticky no fluxo reserva a altura da barra e da expansão móvel. Superfície azul-noturno, raio de 20px (18px no celular), sombra discreta e seção ativa em menta com aria-current. A faixa externa usa o fundo cinza frio para separar navegação e leitura. O estado ativo acompanha as seções reais: hero e Sobre não destacam links de outras seções.

No celular, o disclosure “Seções” usa aria-expanded/aria-controls; Escape retorna foco ao botão, seleção fecha e leva foco ao título de destino, e saída de foco fecha a expansão. O retorno ao topo leva foco à marca do cabeçalho original. A barra oculta é inert e aria-hidden. ResizeObserver mede a altura e ajusta scroll-padding para proteger destinos e foco. Eventos de rolagem passivos são agrupados por requestAnimationFrame, sem dependências adicionais. Transições de 180ms e rolagem suave respeitam prefers-reduced-motion.

A ancoragem automática do navegador é desativada para impedir que a expansão/retração da barra reposicione a rolagem e faça o cabeçalho reaparecer involuntariamente. O posicionamento de navegação usa medidas após o fechamento do disclosure.

## Ajuste pontual do cartão sobreposto
Cartão ampliado de 226 × 142px para 282 × 178px; em telas de até 380px, de 210 × 132px para 262 × 165px. Proporção aproximada de 1,59:1 preservada. Posição inferior esquerda com base em -16px, mantendo saldo e movimentações acima do cartão. Acabamento azul acetinado, microtextura CSS de baixa opacidade, sombras de contato/ambiente e bordas internas para espessura discreta. Marca, chip e slogan recebem espaçamento proporcional.
