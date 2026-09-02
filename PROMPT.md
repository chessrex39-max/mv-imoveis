Quero que você desenvolva o site descrito no SDD que enviarei junto com este prompt.

Antes de começar, leia todo o SDD e analise o Instagram da MV Imóveis:

https://www.instagram.com/imoveis_mv/

O projeto deverá ser um site institucional integrado a um catálogo de imóveis e a um painel administrativo simples. Não transforme isso em uma plataforma imobiliária gigantesca, CRM ou construtor de sites. O objetivo é criar um MVP profissional, funcional, seguro e fácil de administrar.

## Direção visual

Crie uma aparência profissional, elegante e adequada ao mercado imobiliário. Use o Instagram como referência para identidade visual, cores, linguagem e posicionamento da empresa.

Evite aparência genérica de template ou de site feito por IA. O design deverá valorizar as fotografias dos imóveis, transmitir confiança e funcionar muito bem no celular.

Não invente informações sobre a empresa, números, depoimentos, endereços, prêmios ou promessas. Caso alguma informação esteja faltando, use conteúdo provisório claramente identificado ou registre a pendência.

## Estrutura pública

Implemente:

1. Cabeçalho com logo, navegação e botão de contato.
2. Hero com apresentação da imobiliária.
3. Barra de pesquisa de imóveis.
4. Seção de imóveis em destaque.
5. Área com todos os imóveis.
6. Filtros por cidade, bairro e tipo de imóvel.
7. Seção institucional.
8. Chamada para contato.
9. Rodapé com dados da empresa e CRECI.
10. Página individual para cada imóvel.

Cada card de imóvel deverá mostrar a foto principal, título, região, tipo, principais características e status. Não exiba preço nesta versão.

A página individual deverá ter:

* Carrossel de imagens.
* Título e código do imóvel.
* Descrição.
* Localização.
* Tipo do imóvel.
* Área, quartos, banheiros e vagas.
* Características e diferenciais.
* Status disponível ou vendido.
* Botão de WhatsApp.

O botão de WhatsApp deverá abrir uma conversa com uma mensagem automática contendo o título ou código do imóvel visualizado.

## Painel administrativo

Crie uma área administrativa protegida por login.

Inicialmente existirá apenas um administrador, mas a estrutura de autenticação deverá permitir a criação de outros administradores futuramente.

O administrador poderá:

* Cadastrar imóveis.
* Editar imóveis.
* Remover imóveis mediante confirmação.
* Marcar imóveis como disponíveis ou vendidos.
* Enviar até 20 fotos por imóvel.
* Escolher a foto principal.
* Reordenar e excluir fotos.
* Cadastrar novas cidades e bairros.
* Associar cada imóvel a uma cidade e um bairro.

O painel deverá gerenciar somente o conteúdo. Não crie um editor visual para mudar o layout, as cores ou a estrutura do site.

## Regras importantes

* Imóveis vendidos não devem ser excluídos automaticamente.
* Um imóvel vendido deverá permanecer no site com uma identificação visual clara.
* A remoção deverá acontecer somente por ação manual no painel.
* Cidade e bairro deverão ser cadastráveis pelo administrador.
* O CEP e o endereço deverão pertencer ao cadastro do imóvel.
* Não exiba preços.
* O site deve ser completamente responsivo.
* Imagens devem ser comprimidas e otimizadas.
* Formulários precisam de validação e mensagens claras de erro e sucesso.

## Tecnologia

Primeiro, inspecione os arquivos existentes e preserve a tecnologia e a organização do projeto, caso ele já tenha sido iniciado.

Se estiver começando do zero, utilize uma arquitetura moderna compatível com deploy na Vercel. Uma opção adequada é:

* Next.js com TypeScript.
* Tailwind CSS.
* Supabase para banco de dados, autenticação e armazenamento das fotos.

Você pode sugerir outra solução apenas se houver uma justificativa técnica concreta e ela continuar simples de manter e publicar.

## Segurança

* Não exponha senhas, tokens ou chaves privadas.
* Não envie arquivos `.env` para o repositório.
* Faça todas as operações administrativas exigirem autenticação.
* Configure as permissões do banco para impedir alterações realizadas por visitantes.
* Valide os dados no servidor.
* Restrinja uploads a formatos e tamanhos seguros de imagem.
* Proteja as rotas administrativas.
* Não use credenciais diretamente no código.

## Forma de execução

1. Analise o SDD e o Instagram antes de definir o visual.
2. Inspecione o projeto existente, se houver.
3. Apresente rapidamente a arquitetura e a estrutura que serão utilizadas.
4. Implemente o site completo.
5. Teste os fluxos públicos e administrativos.
6. Verifique a responsividade.
7. Faça uma auditoria final de segurança.
8. Prepare o projeto para deploy na Vercel.
9. Informe quais variáveis de ambiente deverão ser configuradas, sem revelar ou inventar valores secretos.
10. utilize skills como playwright, figma e frontend para design.

Não adicione funcionalidades fora do SDD sem explicar e pedir aprovação. Caso encontre alguma decisão realmente necessária para continuar, faça uma pergunta objetiva antes de assumir.

## CONSTRUÇÃO
- Economize tokens, nada de varios agentes trabalhando ao mesmo tempo a não ser que seja EXTREMAMENTE NECESSÁRIO
- siga o raciocinio de = planejar -> executar -> revisar, não fique gastando duas horas com um planejamento de mil linhas, nem saia codando feito maluco sem revisar nada do que está feito.
- NOVAMENTE, ECONOMIZE TOKENS, MAS NÃO PERCA A QUALIDADE NO TRABALHO.
- pesquise na internet também as maiores "tells" pra saber quando um texto é escrito por IA e evite, exemplos são: comparações exageradas "não é X, é Y" enfileirar adjetivos, usar travessão nos textos (ninguem usa travessão)
- utilize as imagens que estão na pasta imagem, tem uma imagem com a logo da imobiliária e uma imagem com o nome principal, essa imagem é um modelo de como eu quero a pagina principal do site, só que no fundo dessa imagem tem a imagem de um imovel e eu não quero uma imagem, quero um video rodando no fundo sabe?
- se voce olhar a pasta dentista-conceitual, que foi um projeto que a gente já fez anteriormente, você vai ver que ao abrir o site na primeira vez aparece tipo uma capa durantes alguns segundos antes do resto do site abrir, eu quero que o site da imboliaria seja assim tambem.
- não utilize fontes feias, utilize fontes bonitas, premium, profissionais sabe?


## SEGURANÇA
- faça auditorias de segurança de vez em quando, nada de .env exposto, variaveis de ambiente expostas, credenciais ou informações sensiveis de facil acesso.
- pesquise na internet os erros mais comuns de segurança quando uma aplicação é construida por IA e evite eles.