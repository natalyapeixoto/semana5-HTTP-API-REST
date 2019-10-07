
### Protocolo HTTP (Hypertext Transfer Protocol)

É um protocolo de comunicação que permite que aplicações web se comuniquem, troquem informações e dados. __É o mensageiro da web__. 

O HTTP funciona como um protocolo de requisição-resposta entre cliente e servidor. 


#### Verbos/métodos (foco no GET) 

VERBOS | significado
------------ | -------------
__GET__| Obter os dados de um recurso.
__POST__ |	Criar um novo recurso.
__PUT__	| Substituir os dados de um determinado recurso.
__PATCH__ |	Atualizar parcialmente um determinado recurso.
__DELETE__ | Excluir um determinado recurso.
__HEAD__ | Similar ao GET, mas utilizado apenas para se obter os cabeçalhos de resposta, sem os dados em si.
__OPTIONS__	| Obter quais manipulações podem ser realizadas em um determinado recurso.

**Response**

Depois que o servidor processa uma requisição, ele precisa devolver uma resposta que geralmente vai estar em um formato que seu navegador consiga entender: HTML, XML ou JSON.

A Response também vem com o __Status Code__ que informa o que aconteceu com a requisição que você mandou.
Os status code são dividos em 5 classes (categorias ou famílias). O Primeiro digito do status define a classe da response. 

Status Code | Significado
------------ | -------------
__100__ | São apenas informativas.
__200__ | Significa que a requisição foi bem sucedida
__300__ | Querem te falar pra você fazer um redirecionamento, ou seja, uma segunda requisição
__400__ | Significa que tem algum erro de sintaxe na requisição ou a requisção não pode ser completada. 
__500__ | Aparentemente o servidor não conseguiu responder um request válido.  

Lista de status code: https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP 

__Headers__: Cabeçalho da requisição/resposta

Um cabeçalho de requisição é um cabeçalho HTTP que pode ser utilizado em uma requisição HTTP, e não é relacionado ao conteúdo da mensagem.


__CORS__: Cross-Origin Resource Sharing. Por default uma aplicação JavaScript rodando no browser pode apenas acessar recursos HTTP do mesmo domínio (origin). 
Então se no backend não setarmos regras que permitam requests de outros domínios, a requisição vai falhar. 

__Body__: Corpo da requisição/resposta 

Não usa-se, normalmente, body nas requisições GET. Ele é mais útil em POSTs e PUTs,
Quando você envia os dados de um formulário de uma página HTML, por exemplo. 

### Criando um servidor com Node.js

#### Usando Express
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
}).listen(PORT)
```

### URL
Exemplo: www.google.com/images?size=500&free_use=false.

Nessa URL temos o domínio: www.google.com.
o path: /images.
Dados query string (depois da interrogação): size = 500 e free_use = false.

__queryString__:http://example.com/over/there?name=ferret  'name=ferret' 




### API (Application Programming Interface)

É um conjunto de instruções e padrões de programação para acesso a um aplicativo de software. Uma empresa de software lança sua API para o público de modo que outros criadores de software possam desenvolver produtos acionados por esse serviço.

#### API REST (https://blog.caelum.com.br/rest-principios-e-boas-praticas/)
REST (Respresentational State Transfer)

REST é um dos modelos de arquitetura que foi descrito por Roy Fielding, um dos principais criadores do protocolo HTTP, em sua tese de doutorado e que foi adotado como o modelo a ser utilizado na evolução da arquitetura do protocolo HTTP.


__Endpoint__ : Um endpoint de um web service é a URL(o final dela) onde seu serviço pode ser acessado por uma aplicação cliente.   

### Rotas

Rotas são usadas para determinar como uma aplicação responde a um request de um cliente em um determinado endpoint, que é uma URI e método HTTP específico (ex: GET).

```
app.METHOD(PATH, HANDLER)
```

Cada Rota pode ter uma ou mais funções, que são executadas quando a rota é 'matched'


### Controller 
Callback functions que lidam com o router. 


### cURL (client for URL)
É uma ferramenta da linha de comando para transferir dados usando vários protocolos, entre eles o HTTP. 

#### HTTP GET 
``` curl https://www.google.com ``` 

#### Retornando somente os headers de uma URL 
```curl -I https://www.google.com ```

#### Links:
https://medium.com/clebertech/o-que-%C3%A9-json-daaa9311e929
https://www.w3schools.com/nodejs/
https://otaviopace.github.io/livro-desenvolvimento-web-basico/book/qual_a_ideia_do_livro.html 
https://expressjs.com
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
https://nodemon.io/
https://github.com/expressjs/cors
https://www.keycdn.com/support/popular-curl-examples