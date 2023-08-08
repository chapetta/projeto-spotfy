<h1> Boas-vindas ao repositório do TrybeTunes(ChapsTunes)! </h1>
 
 <h4>Sobre o projeto:</h4>
 <p>
 Nesse projeto chamado TrybeTunes do curso da Trybe que eu estudei, eu fiz algumas alterações e utilizei o TypeScript em vez do javascript como ferramenta
   principal no projeto original!

Neste projeto eu criei o TrybeTunes(ou ChapTunes, ja que mudei o nome), que é uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

Fazer login;
Pesquisar por uma banda ou artista;
Listar os álbuns disponíveis dessa banda ou artista;
Visualizar as músicas de um álbum selecionado;
Reproduzir uma prévia das músicas deste álbum;
Favoritar e desfavoritar músicas;
Ver a lista de músicas favoritas;
Ver o perfil da pessoa logada;
Editar o perfil da pessoa logada;


 </p>
 
 <h3> Requisitos do Projeto: </h3>
 
 <p> 
  1.  Crie as rotas necessárias para a aplicação
   Você deve utilizar o BrowserRouter pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico.<br>
   Crie cada componente dentro da pasta src/pages, conforme o indicado abaixo:<br>
   Rota /<br>
   Rota /search<br>
   Rota /album/:id<br>
   Rota /favorites<br>
   Rota /profile<br>
   Rota /profile/edit<br>

   <br><br>
2. Crie um formulário para identificação
Dentro do componente Login, que é renderizado na rota /, crie um formulário para que a pessoa usuária se identifique com um nome<br><br>
3.  Crie um componente de cabeçalho
Crie um componente chamado Header, dentro da pasta src/components<br><br>
4. Crie os links de navegação no cabeçalho
Crie o link que redireciona para a página de pesquisa:<br>
Crie o link que redireciona para a página de músicas favoritas:<br>
Crie o link que redireciona para a página de exibição de perfil:
<br><br>
5. Remova o item do carrinho de compras ao clicar nele
Ao clicar no produto no carrinho de compra, ele deve ser removido da lista.<br><br>
6. (TDD) Desenvolva testes de no mínimo 75% de cobertura total e 100% da função saveCartItems
Implemente os testes necessários na função saveCartItems<br><br>
7. (TDD) Desenvolva testes para atingir 100% de cobertura total e 100% da função getSavedCartItems
Implemente os testes necessários na função getSavedCartItems<br><br>
8. Carregue o carrinho de compras ao iniciar a página
Salve os itens adicionados no carrinho de compras no localStorage<br><br>
9. Calcule o valor total dos itens do carrinho de compras
O elemento com o valor total dos produtos deve possuir a classe total-price<br><br>
10. Limpe o carrinho de compras
Implemente a lógica no botão Esvaziar carrinho para limpar o carrinho de compras<br><br>
11. Adicione um texto de carregando durante uma requisição à API
Adicione um elemento com o texto carregando... durante a requisição à API<br><br>
</p>
 
