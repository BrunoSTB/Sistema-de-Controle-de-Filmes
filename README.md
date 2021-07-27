# Sistema de Controle de Filmes
## Como Utilizar
Para se utilizar o sistema, basta clonar o repositório, e, na pasta dos arquivos, iniciar o terminal. Em seguida, é só digitar 'node index.js' (no terminal) que o sistema irá rodar no url 'http://localhost:3000/'.

A partir daí, recomendo o uso do Postman (https://www.postman.com/), um API para desenvolvimento que permite realizar diferentes requisições ao servidor. No caso dessa aplicação só serão realizados requests de GET e POST nos URLs que serão detalhados na seção de funções.

O Postman é bem simples de usar, e existem muitos tutoriais explicando como realizar as requisições, então não vou me alongar muito. Mas, o que é preciso saber, é que, para consultar as listas de filmes ou pessoas, é necessário apenas realizar uma requisição GET para o url correto. 

Já para adicionar algo em alguma lista, é necessário realizar uma requisição de POST e modificar o Body, inserindo dados no modelo JSON. 

## Funções: 
##### Insere novos filmes ('/filmes', Método POST)

##### Consulta filmes registrados ('/filmes', Método GET)


##### Insere novos espectadores ('/espectadores', Método POST)

##### Consulta espectadores registrados ('/espectadores', Método GET)


##### Marca filmes assistidos ('/assistidos', Método POST)


##### Mostra quantos filmes um espectador assistiu ('/historico_de_filmes', Método POST)

##### Mostra quantos espectadores assistiram a um determinado filme ('/visualizacoes', Método POST)

## Exemplos
#### Marcar filme ( Madagascar) visto por espectador (Carlos)
![assistidosprint](https://user-images.githubusercontent.com/78513841/127073033-4f60166b-2fca-40c6-8076-85409cc2cdeb.png)

#### Cadastrando filme
![filmespost](https://user-images.githubusercontent.com/78513841/127073034-2fbeef97-1929-4eb2-b5d3-f09d0dc359c4.png)

#### Lista de espectadores cadastrados
![getespectadores](https://user-images.githubusercontent.com/78513841/127073035-ae825550-a330-41d9-93f8-ea90942bf7bf.png)

#### Número de filmes vistos pelo espectador
![historico](https://user-images.githubusercontent.com/78513841/127073037-fa88ab27-c5bf-43b1-a056-f1518fb568da.png)



## Arquivos & Organização
#### /db/knex.js:
Realiza a conexão do banco de dados com o Knex (https://knexjs.org/) um 'construtor' de SQL queries atráves de técnicas de mapeamento objeto-relacional.

#### /db/funcoes.js:
Consiste em um arquivo com as funções que irão realizar CRUD's, essas funções são pré-definidas nesse arquivo, para serem utilizadas pelo arquivo principal (index.js).

#### index.js:
Arquivo principal do sistema. Consiste em um arquivo escrito em NodeJS, utilizando o framework web Express (https://expressjs.com/) para seu funcionamento. É esse o arquivo que lida com as requisições web.

#### maindb.sqlite3:
Arquivo de banco de dados do sistema. Foi utilizado o SQLite3 (https://www.sqlite.org/). O arquivo consiste em 3 tables: filmes, espectadores e filmes_Assistidos. A primeira se resume no titulo do filme e em seu id, a segunda possui o nome do espectador e seu devido id, a última table consiste em duas foreign keys (espectador_id e filme_id) para mapear quem assistiu qual filme.

![database](https://user-images.githubusercontent.com/78513841/127116860-f5cd73ea-22b9-4c37-ae7f-2a7305103fc8.png)
