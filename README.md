# Sistema de Controle de Filmes

## Funções: 
##### Insere novos filmes
##### Consulta filmes registrados

##### Insere novos espectadores
##### Consulta espectadores registrados

##### Marca filmes assistidos

##### Conta quantos filmes um espectador assistiu
##### Conta quantos espectadores assistiram a um determinado filme



## Arquivos & Organização
#### /db/knex.js:
Realiza a conexão do banco de dados com o Knex (https://knexjs.org/) um 'construtor' de SQL queries atráves de técnicas de mapeamento objeto-relacional.

#### /db/funcoes.js:
Consiste em um arquivo com as funções que irão realizar CRUD's, essas funções são pré-definidas nesse arquivo, para serem utilizadas pelo arquivo principal (index.js).

#### index.js:
Arquivo principal do sistema. Consiste em um arquivo escrito em NodeJS, utilizando o framework web Express (https://expressjs.com/) para seu funcionamento. É esse o arquivo que lida com as requisições web.

#### maindb.sqlite3:
Arquivo de banco de dados do sistema. Foi utilizado o SQLite3 (https://www.sqlite.org/). O arquivo consiste em 3 tables: filmes, espectadores e filmes_Assistidos. A primeira se resume no titulo do filme e em seu id, a segunda possui o nome do espectador e seu devido id, a última table consiste em duas foreign keys (espectador_id e filme_id) para mapear quem assistiu qual filme. 
