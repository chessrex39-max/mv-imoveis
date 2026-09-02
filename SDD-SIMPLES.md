# SDD — Site MV Imóveis

## 1. Objetivo

Desenvolver um site institucional para a MV Imóveis que também funcione como catálogo de imóveis. Os visitantes poderão pesquisar imóveis, aplicar filtros, visualizar os detalhes e entrar em contato pelo WhatsApp.

## 2. Área pública

O site deverá possuir:

* Página inicial com apresentação da imobiliária.
* Seção institucional sobre a MV Imóveis.
* Barra para pesquisar imóveis.
* Área com os imóveis disponíveis.
* Página individual para cada imóvel.
* Galeria em carrossel com até 20 fotos por imóvel.
* Filtros por região e tipo de imóvel.
* Informações e características de cada imóvel.
* Botão de contato pelo WhatsApp em cada anúncio.
* Layout responsivo para computador e celular.

O preço dos imóveis não será exibido nesta primeira versão.

## 3. Informações dos imóveis

Cada imóvel poderá possuir:

* Título.
* Código de identificação.
* Descrição.
* Tipo do imóvel, como apartamento, casa ou terreno.
* Cidade.
* Bairro.
* Endereço e CEP.
* Área.
* Quantidade de quartos, banheiros e vagas.
* Características e diferenciais.
* Até 20 fotos.
* Foto principal.
* Status: disponível ou vendido.
* Contato pelo WhatsApp.

## 4. Pesquisa e filtros

O visitante poderá:

* Pesquisar imóveis por texto.
* Filtrar por cidade ou bairro.
* Filtrar por tipo de imóvel.
* Visualizar apenas imóveis disponíveis ou consultar também os vendidos.

As regiões não serão fixas no código. O administrador poderá cadastrar novas cidades e bairros pelo painel conforme surgirem imóveis em outras localidades.

## 5. Painel administrativo

Inicialmente, haverá apenas uma conta de administrador, utilizada por Matheus.

O administrador poderá:

* Adicionar, editar e remover imóveis.
* Enviar, excluir e alterar a ordem das fotos.
* Escolher a foto principal.
* Marcar um imóvel como disponível ou vendido.
* Cadastrar novas cidades e bairros.
* Editar as informações e características dos imóveis.

O painel será destinado ao gerenciamento de conteúdo. Ele não permitirá alterar o design, as cores ou a estrutura do site.

A estrutura deverá permitir que outros administradores sejam adicionados futuramente, sem que isso precise ser desenvolvido agora.

## 6. Imóveis vendidos

Quando um imóvel for vendido, ele continuará cadastrado e será identificado visualmente como “Vendido”.

A exclusão acontecerá somente quando o administrador entrar no painel e remover o imóvel manualmente.

## 7. Identidade e referência

A identidade visual deverá considerar o Instagram oficial da empresa:

https://www.instagram.com/imoveis_mv/

Informações identificadas inicialmente:

* Nome: MV Imóveis.
* Localização: Jaboatão dos Guararapes, Pernambuco.
* CRECI: 15063.
* Posicionamento: empresa com 19 anos de atuação.

Essas informações deverão ser confirmadas antes da publicação definitiva.

## 8. Segurança e desempenho

* O painel deverá exigir autenticação.
* Somente administradores poderão modificar os dados.
* Senhas e chaves não poderão ficar expostas no código.
* Variáveis de ambiente deverão ficar fora do repositório.
* Os uploads deverão aceitar apenas imagens válidas.
* As imagens deverão ser otimizadas para não deixar o site lento.
* O site deverá funcionar corretamente em dispositivos móveis.
