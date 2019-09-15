
### Protocolo HTTP (Hypertext Transfer Protocol)

É um protocolo de comunicação que permite que aplicações web se comuniquem, troquem informações e dados. __É o mensageiro da web__. 

O HTTP funciona como um protocolo de requisição-resposta entre cliente e servidor. 


#### Verbos/métodos (foco no GET) 

VERBOS | significado
------------ | -------------
__GET__| Obter os dados de um recurso.
POST |	Criar um novo recurso.
PUT	| Substituir os dados de um determinado recurso.
PATCH |	Atualizar parcialmente um determinado recurso.
DELETE | Excluir um determinado recurso.
HEAD | Similar ao GET, mas utilizado apenas para se obter os cabeçalhos de resposta, sem os dados em si.
OPTIONS	| Obter quais manipulações podem ser realizadas em um determinado recurso.

**Response**
Depois que o servidor processa uma requisição, ele precisa devolver uma resposta que geralmente vai estar em um formato que seu navegador consiga entender: HTML, XML ou JSON.

A Response também vem com o __Status Code__ que informa o que aconteceu com a requisição que você mandou.
Os status code são dividos em 5 classes (categorias ou famílias). O Primeiro digito do status define a classe da response. 

Status Code | Significado
------------ | -------------
100 | são apenas informativas.
200 | significa que a requisição foi bem sucedida
300 | querem te falar pra você fazer um redirecionamento, ou seja, uma segunda requisição
400 | significa que tem algum erro de sintaxe na requisição ou a requisção não pode ser completada. 
500 | aparentemente o servidor não conseguiu responder um request válido.  

lista de status code: https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP 
ex: /produtos

### URL
Exemplo: www.google.com/images?size=500&free_use=false.

Nessa URL temos o domínio: www.google.com.
A rota: /images.
Dados query string (depois da interrogação): size valendo 500 e free_use valendo false.

__queryParams__:http://example.com/over/__there?name=ferret__

__body__: corpo da requisição/resposta 


### Criando um servidor com Node.js
```
const http = require('http');
const port = 8080

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);

```

### Usando Express
Express é uma lib que facilita a criação de servidores HTTP
`npm install --save express`

```
const express = require('express')
const PORT = 8000

const application = express()

application.get('/', function (request, response) {
  console.log('URL:', request.url)
  console.log('Método:', request.method)
  response.status(200).send('Olá!')
})

application.listen(PORT)
```

### API (Application Programming Interface)

É um conjunto de instruções e padrões de programação para acesso a um aplicativo de software. Uma empresa de software lança sua API para o público de modo que outros criadores de software possam desenvolver produtos acionados por esse serviço.


__endpoint__ : Um endpoint de um web service é a URL(o final dela) onde seu serviço pode ser acessado por uma aplicação cliente.   

#### API REST (https://blog.caelum.com.br/rest-principios-e-boas-praticas/)

    * Pricípios 

    * Boas práticas 

__CORS__ https://github.com/expressjs/cors

### Rotas


### Controller 


EXTRA 
Projeto com front 
Conteuda Extra
queryParams  
get buscando registro 
conteudo extra post FILTER 

passa por uma estrada(regras) para chegar na cidade para depositar seu dinheirinho no banco. 


#### Links:
https://medium.com/clebertech/o-que-%C3%A9-json-daaa9311e929
https://www.w3schools.com/nodejs/
https://otaviopace.github.io/livro-desenvolvimento-web-basico/book/qual_a_ideia_do_livro.html 