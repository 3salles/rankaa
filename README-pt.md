<p align="center">
  <h3 align="center">Rankaa</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Version&message=1.0&color=7159c1" alt="Version-1.0" />
  <img src="https://img.shields.io/static/v1?label=Desktop&message=Unfinished&color=orange" alt="Desktop-unfinished" />
  <img src="https://img.shields.io/static/v1?label=Mobile&message=Unfinished&color=FFA500" alt="Mobile-unfinished" />
  <img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="Licença" />
</p>

  <p align="center">
  Site desenvolvido durante a cadeira de Projeto de Desenvolvimento de Software da UFMA.
    <br />
    <br />
    <a href="README.md">🇺🇸Inglês</a>
    ·
    <a href="README-pt.md">🇧🇷Português</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
# :card_file_box: Tabela de Conteúdos

* [Sobre o Projeto](#book-sobre-o-projeto)
  * [Diagramas](#spiral_notepad-diagramas)
  * [Layout](#art-layout)
  * [Tecnologias](#computer-tecnologias)
  * [Recursos](#sparkles-recursos)
* [Instalação](#bricks-instalaçao)
  * [Pré-requisitos](#construction-pré-requisitos)
  * [Front-end](#lipstick-front-end)
    * [Instalando Dependências](#construction-instalando-dependências)
    * [Rodando o Front-end](#arrow_forward-rodando-o-front-end)
  * [Back-end](#file_cabinet-back-end)
    * [Instalando Dependências](#construction-instalando-dependências)
    * [Configurando o Back-end](#wrench-configurando-o-back-end)
    * [Rodando o Back-end](#arrow_forward-rodando-o-back-end)
* [Licença](#page_facing_up-licença)
* [Autores](#woman_technologist-man_technologist-autores)

## :book: Sobre o Projeto

Rankaa é um site criado durante a cadeira de Projeto e Desenvolvimento de Software aplicando os conceitos aprendidos em sala de aula.

Rankaa foi desenvolvido no intuito de acompanhar os campeonatos de atléticas da universidade: o usuário pode ver os jogos, as modalidades, as atléticas e o rank (por modalidade ou geral); já o organizador pode cadastrar, editar e deletar jogos e atléticas.


**Jogos:** O usuário pode ver data, local, hora, as atléticas que estão competindo e a modalidade.

**Atlética:** O usuário pode ver as redes sociais, nome, logo, curso, modalidades cadastradas e a posição no ranking de cada modalidade.

**Modalidades:** O usuário pode acompanhar os jogos e resultados de cordo com as modalidades cadastradas no campeonato.

<!-- TODO: Add landpage print -->

### :art: Layout

Você pode encontrar o layout do projeto no link abaixo:

* [Layout](https://www.figma.com/file/1DAC897inORj3JpsyfI9Mi/RankAA?node-id=0%3A1)

Por causa do tempo, o site foi desenvolvido para mobile, então é possível existirem bugs na versão desktop.

🚨 Você precisa ter uma conta no  [Figma](https://www.figma.com) para acessar aos layouts.

### :computer: Tecnologias

* [TypeScript](https://www.typescriptlang.org)
* [React.js](https://reactjs.org/docs/getting-started.html)
* [Yarn](https://yarnpkg.com)
* [Axios](https://axios-http.com/docs/intro)
* [React-hook-forms](https://react-hook-form.com)
* [Yup](https://github.com/jquense/yup)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [TinyDB](https://tinydb.readthedocs.io/en/latest/)

### :sparkles: Recursos

  - [ ] Versão Desktop
  - [x] Versão para Celular
  
## :bricks: Instalação

Este projeto usa [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com), [Python](https://www.python.org) e [Pipenv](https://pipenv.pypa.io/en/latest/) você precisa deles para construir as dependências dele.

### :construction: Pré-requisitos

Clone o repositório deste projeto:

```bash
$ git clone https://github.com/3salles/rankaa.git

# Entre na pasta rankaa:

$ cd rankaa
```

🚨 Se você não possuir o git em sua máquina, instale [aqui](https://git-scm.com/downloads).

## :lipstick: Front-end

### :construction: Instalando Dependências

Dentro da pasta rankaa, abra a pasta `frontend`:

```bash
$ cd frontend

# E instale as dependências com o seguinte comando:

$ yarn install

```

### :arrow_forward: Rodando o Front-end

Rode o seguinte comando para ver a aplicação:

```bash
yarn start
```

A aplicação estará disponível em `http://localhost:3000`.

🚨 Lembre de iniciar o backend!

## :file_cabinet: Back-end

### :construction: Instalando Dependências

Dentro da pasta rankaa, abra a pasta `backend`:

```bash
$ cd backend

# Instale o Pipenv se não o tiver:

$ pip install pipenv
```

### :wrench: Configurando o Back-end

Dentro da pasta `backend`, crie um arquivo `.env`:

```bash
$ touch .env
```
Adicione o seguinte conteúdo neste arquivo:

```bash
FLASK_APP=
FLASK_ENV=development
```

### :arrow_forward: Rodando o Back-end

No terminal, ative o ambiente virtual com:

```bash
# Para instalar as dependências

$ pipenv install

# Para ativar o ambiente virtual

$ pipenv shell

# Para rodar o back

$ flask run

```
A aplicação estará disponível em `http://localhost:5000`.


## :page_facing_up: Licença

Este projeto está sob a licença [MIT]().

## :woman_technologist: :man_technologist: Autores

<p align="center">
  <a href="https://github.com/3salles">
    <img src="https://img.shields.io/badge/Beatriz%20Salles-Github-darkblue" alt="Beatriz Salles" />
  </a>
  <a href="https://github.com/Delryson">
    <img src="https://img.shields.io/badge/Delryson%20Saraiva-Github-indigo" alt="Delryson Saraiva" />
  </a>
  <a href="https://github.com/josenbmesquita">
    <img src="https://img.shields.io/badge/Jos%C3%A9%20Mesquita-Github-blue" alt="José Mesquita" />
  </a>
  <a href="https://github.com/Thalles2310">
    <img src="https://img.shields.io/badge/Thallyson%20Gabriel-Github-purple" alt="Thallyson Gabriel" />
  </a>
</p>

<p align="center">Developed with 💜</p>
