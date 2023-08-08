<h1> Boas-vindas ao repositório do TrybeTunes(ChapsTunes)! </h1>
 
 <h4>Sobre o projeto:</h4>
 <p>
 Nesse projeto chamado TrybeTunes do curso da Trybe que eu estudei, eu fiz algumas alterações e utilizei o TypeScript em vez do javascript como ferramenta
   principal no projeto original!

Neste projeto eu criei o TrybeTunes(ou ChapTunes, ja que mudei o nome), que é uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:<br>

Fazer login;<br>
Pesquisar por uma banda ou artista;<br>
Listar os álbuns disponíveis dessa banda ou artista;<br>
Visualizar as músicas de um álbum selecionado;<br>
Reproduzir uma prévia das músicas deste álbum;<br>
Favoritar e desfavoritar músicas;<br>
Ver a lista de músicas favoritas;<br>
Ver o perfil da pessoa logada;<br>
Editar o perfil da pessoa logada;<br>


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
5.Crie o formulário para pesquisar artistas
Este formulário deve conter um input e um botão para que seja possível pesquisar os álbums de uma banda ou artista.<br><br>
6. Faça a requisição para pesquisar artistas
Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbums da banda ou artista pesquisada.<br><br>
7.  Crie a lista de músicas do álbum selecionado
Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado.<br><br>
8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas
Você já consegue listar as músicas dos álbuns. Nessa etapa você poderá marcar quais são as músicas que você mais gosta.<br><br>
9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum
Ao entrar na página com a lista de músicas de um álbum, na rota /album/:id, as músicas que já foram favoritadas anteriormente devem estar com o checkbox marcado
<br><br>
10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música
Após adicionar uma música na lista de favoritas usando a função addSong (Requisito 8), faça uma requisição usando a função getFavoriteSongs para atualizar a lista de músicas favoritas<br><br>
11. Crie o mecanismo para remover músicas na lista de músicas favoritas
Depois de listar e favoritar as músicas de um álbum, você também deve poder remover uma música da lista de favoritas.<br><br>
12.  Crie a lista de músicas favoritas
Crie a lista dentro do componente Favorites, que é renderizado na rota /favorites.<br><br>
13. Crie a exibição de perfil
Crie a exibição do perfil dentro do componente Profile, que é renderizado na rota /profile<br><br>
14. Crie o formulário de edição de perfil
Crie o formulário de edição de perfil dentro do componente ProfileEdit, que é renderizado na rota /profile/edit.<br><br>
</p>
 
