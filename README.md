# Projeto desenvolvido usando JavaScript com o auxílio de três bibliotecas

## Pensado para ser usado como um cadastro de clientes de uma loja de roupas infantil.

### Backend:

A primeira biblioteca usada foi a "express", para a criação de um servidor para essa aplicação web. Com os métodos 'use' e 'set', eu passei onde estariam as pastas CSS e ejs a serem exibidas na tela, e como as informações seriam salvas quando o botão de cadastro fosse clicado. A próxima biblioteca foi a "node.js". A propriedade 'node:path' me facilitou pegar os caminhos de onde viriam, e para onde iriam, os arquivos de estilização e as paginas a serem renderizadas pelo navegador. Enquanto a propriedade 'node:fs' me possibilitou pegar as informações recebidas e escreve-las no meu arquivo "database.json", na qual foi usado como banco de dados, para armazenar as informações coletadas e exibi-las posteriormente. A terceira biblioteca usada foi a "ejs", que me permite criar paginas HTML, mas me permitindo colocar códigos JavaScript dentro da mesma. Com o ejs eu consigo mandar variáveis do JavaScript para a pagina a ser montada no frontend e aplicar os métodos da linguagem, como o 'filter' e o 'forEach', que foram usados para percorrer toda a lista de usuários e me devolver as informações uma a uma.

### Frontend:

O método 'render', da biblioteca "express", me permite escolher uma das paginas, dentro da pasta 'views', para ser exibida na tela quando for requisitada. Com essa propriedade, eu criei uma pagina .ejs, que me permite criar paginas HTML (que são renderizadas no navegador), para cada requisição feita pela parte do cliente. Os estilos, bem simples, estão contidos na pasta 'CSS' que está dentro da pasta public, na qual pode ser usada por qualquer arquivo. Assim, devolvendo uma pagina HTML, estilizada, contendo os formulários e demais funções. Todos os nomes, na tela de visão geral ou na tabela filtrada, estão em caixa alta, para ficar uniforme e facilitar a visualização.

### Funçao do projeto:

Na página inicial temos dois botões, à esquerda, para cadastrar novos clientes e à direta, para ter uma visão geral de todos os clientes, em ordem crescente de número de calçado, com informações como: Nome, idade, número do calçado, sexo, tamanho da vestimenta e nome da mãe. Nessa mesma página, temos um ID para cada cliente e outra entrada para digitar um ID, para aquele cliente ser deletado do banco de dados. Na página inicial, logo abaixo desses dois botões, há outra entrada, que colocando um número, vai ser devolvido uma nova página com uma lista de todos os clientes, que tenham esse como seu número de calçado.

* Para ver esse código rodando é so fazer um **git clone** desse repositório e então digitar no terminal:\
*cd ejs-stock*\
*npm run dev*\
E digitar *localhost:3000* no seu navegador.
