# Projeto de Baralho Pokemon

Este é um projeto de uma aplicação de criação e gerenciamento de baralhos Pokémon, desenvolvida utilizando Angular e Tailwind CSS.

E este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Funcionalidades

-> Criar um novo baralho Pokémon;
-> Adicionar cartas ao baralho;
-> Visualizar detalhes do baralho;
-> Atualizar informações do baralho;
-> Excluir um baralho;
-> Listar todos os baralhos existentes.

## Pré-requisitos

Para executar este projeto localmente, você precisa ter o seguinte instalado em sua máquina:

-> Node.js;
-> Angular CLI;
-> Tailwind;
-> json-server (para simular uma API REST).

## Como executar

1 - Baixar Node.Js:
  entre no site `https://nodejs.org/en/download` e baixe a versão do node
  de acordo com seu sistema operacional e siga os passos de instalação.

2 - Baixar Angular CLI(Version 16):

Abra seu terminal e execute `npm install -g @angular/cli@16`,
caso tenha dificultadades para instalar, execute como administrado.

3 - Clone este repositório para o seu ambiente local:

`git clone` https://github.com/seu-usuario/nome-do-repositorio.git

4 - Navegue até o diretório do projeto:

cd nome-do-repositorio.

5 - Instale as dependências do projeto:

executar `npm install`.

6 - Abra outra janela do terminal e inicie o servidor de desenvolvimento do Angular:

executar  `ng serve` e abra seu navegador e abra seu navegador e acesse `http://localhost:4200/`
para visualizar a aplicação.

7 - Instalar o servidor da API REST (json-server):

executar `npm install json-server`.

8 - Inicie o servidor da API REST (json-server):

entrar na pasta chamada dados e executar `json-server --watch db.json` e abra seu navegador e
acesse `http://localhost:3000/BaralhosPokemon` para acessar a API.

## Arquivo db.json

O arquivo db.json contém os dados simulados da API REST. Ele inclui as informações dos baralhos Pokémon criados e gerenciados pela aplicação. Você pode adicionar, editar ou excluir dados neste arquivo para simular diferentes cenários de uso da aplicação.

## Autor

Expedito Pereira de Paiva Neto

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# pokemon-deck
