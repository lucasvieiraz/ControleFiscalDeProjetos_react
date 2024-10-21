# Controle de Arcabouço Fiscal de Projetos

Este projeto é uma aplicação em React que permite o controle e gerenciamento de projetos com suas respectivas categorias e serviços. Utiliza uma API fake para persistência dos dados, simulada com JSON Server.

## Funcionalidades

Cadastro de Projetos: Adicione novos projetos, inserindo nome, orçamento e categoria.

Gerenciamento de Serviços: Adicione serviços aos projetos, especificando nome, custo e descrição.

Categorias Dinâmicas: As categorias são obtidas de uma API fake e listadas dinamicamente no formulário.

## Tecnologias Utilizadas

React: Para construção da interface do usuário.

JSON Server: Simulando uma API para persistência dos dados.

CSS Modules: Para estilização dos componentes de forma modular e isolada.

Fetch API: Para fazer requisições à API fake.

## Como Executar

Pré-requisitos

Node.js instalado na máquina.

npm ou yarn para gerenciamento de pacotes.

## Passos para execução

Clone o repositório:

```bash

git clone https://github.com/lucasvieiraz/ControleFiscalDeProjetos_react.git
```

Instale as dependências do projeto:

```bash

npm install
```

Inicie o JSON Server (simula uma API na porta 5000):

```bash

npx json-server --watch db.json --port 5000
```
Execute a aplicação React:

```bash

npm start
```
