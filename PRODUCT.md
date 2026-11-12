# Elo Bank — requisitos do produto

## Requisitos aprovados
- Banco digital fictício; não apresentar serviços como operacionais.
- Frontend em React, TypeScript e Vite.
- Primeira entrega: identidade própria, design system, componentes reutilizáveis e landing page institucional responsiva e acessível.
- Cadastro de clientes exclusivo de operadores autorizados. Não oferecer autocadastro público.
- Não implementar autenticação, cadastro real, saldos ou transferências.
- Não criar áreas ou prévias de cliente e operador nesta etapa. Essas áreas dependem de histórias de usuário aprovadas.
- Não alterar regras de negócio ou backend.
- Backend futuro: Java/Spring Boot com PostgreSQL.
- Referências apenas como direção, sem copiar marcas, textos, imagens ou layouts.
- Executar verificações de TypeScript e build.

## Limites da entrega
Esta página é uma apresentação estática. Não há APIs, persistência, cookies de aplicação, analytics, formulários de coleta, credenciais, autorização ou dados bancários. As ações navegam entre seções; o menu móvel e as perguntas frequentes são interações locais.

## Integração futura (orientação técnica, não requisito de negócio adicional)
Manter acesso HTTP em uma camada própria quando os contratos do Spring Boot forem aprovados; definir DTOs e tratamento de erros conforme a API, preferencialmente a partir de OpenAPI. O frontend nunca se conecta diretamente ao PostgreSQL. Autorização e validações de negócio serão responsabilidade do backend. Não há contrato de API, endpoints ou estratégia de sessão presumidos nesta entrega.

## Autoridade visual
A paleta e a direção geral foram aprovadas. Escolhas de composição, tamanhos, componentes e textos de apresentação estão em DESIGN.md e não definem novos produtos ou regras bancárias. As cinco capturas citadas não estavam disponíveis durante esta implementação.
