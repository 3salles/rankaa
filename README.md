<p align="center">

  <h3 align="center">Rankaa</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Version&message=1.0&color=7159c1" alt="Version-1.0" />
  <img src="https://img.shields.io/static/v1?label=Desktop&message=Unfinished&color=orange" alt="Desktop-unfinished" />
  <img src="https://img.shields.io/static/v1?label=Mobile&message=Unfinished&color=FFA500" alt="Mobile-unfinished" />
  <img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="License" />
</p>

<p align="center">
    This website was created during the subject Software Design and Development at UFMA.
    <br />
    <br />
    <a href="README.md">🇺🇸English</a>
    ·
    <a href="README-pt.md">🇧🇷Portuguese</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## 🗂 Table of Contents

* [About the Project](#book-about-the-project)
  * [Diagrams](#spiral_notepad-diagrams)
  * [Layout](#art-layout)
  * [Technologies](#computer-technologies)
  * [Features](#sparkles-features)
* [Installation](#bricks-installation)
  * [Prerequisites](#construction-prerequisites)
  * [Front-end](#lipstick-front-end)
    * [Installing Dependencies](#construction-installing-dependencies)
    * [Running Front-end](#arrow_forward-running-front-end)
  * [Back-end](#file_cabinet-back-end)
    * [Installing Dependencies](#construction-installing-dependencies)
    * [Setting Back-end](#wrench-setting-back-end)
    * [Running Back-end](#arrow_forward-running-back-end)
* [License](#page_facing_up-license)
* [Authors](#woman_technologist-man_technologist-author)

## :book: About The Project

Rankaa is a website developed during the University subject Software Design and Development applying the concepts learned into classes.

Rankaa was created to follow the university championship: the user can see games, modalities, teams and rank (by modality or general); the organizer can register, edit and delete games and teams.

**Games:** The user can see date, time, place, the teams who going to play and the modality.

**University Team:** The user can see social medias, name, logo, course, registered modalities and ranking in each modality.

**Modalities:** The user can follow games and results by modality registered into the campionship.
<!-- TODO: Add landpage print -->

## :spiral_notepad: Diagrams

* Use Case Diagram:

  ![CasodeUsoAtualizadoRankaa](https://user-images.githubusercontent.com/67746021/132788949-2765f50f-771d-4a3a-a2de-5e3fb1bccee5.jpg)

  * Class Diagram:

  ![ClassesAtualizadoRankaa](https://user-images.githubusercontent.com/67746021/132789130-de71f177-0f02-4586-a939-ffe5e73530e1.jpg)

  * Sequence Diagram:

  ![DiagramaSequenciaRANKAA (1)](https://user-images.githubusercontent.com/67746021/132789806-4e81e70b-0911-4d03-bc86-af08361740b7.jpg)


  * State  Diagram:

  ![estadosRankaafinal](https://user-images.githubusercontent.com/67746021/132789537-3ecfd81c-4aae-4009-8c81-f9a3d655a1e0.JPG)
### :art: Layout

You can access the project's layout in link below:

* [Layout](https://www.figma.com/file/1DAC897inORj3JpsyfI9Mi/RankAA?node-id=0%3A1)

Because of time, the creation of the mobile system was prioritized, so it may possible has bugs in desktop version.

🚨 You need have a [Figma](https://www.figma.com) account to acess the layout.

### :computer: Technologies

* [TypeScript](https://www.typescriptlang.org)
* [React.js](https://reactjs.org/docs/getting-started.html)
* [Yarn](https://yarnpkg.com)
* [Axios](https://axios-http.com/docs/intro)
* [React-hook-forms](https://react-hook-form.com)
* [Yup](https://github.com/jquense/yup)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [TinyDB](https://tinydb.readthedocs.io/en/latest/)

### :sparkles: Features

  - [ ] Desktop Version
  - [x] Mobile Version

## :bricks: Installation

This project use [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com), [Python](https://www.python.org) and [Pipenv](https://pipenv.pypa.io/en/latest/), you will need them to build its dependencies.

### :construction: Prerequisites

Clone this project repository:
```bash

$ git clone https://github.com/3salles/rankaa.git

# Enter in `rankaa` folder:

$ cd rankaa
```

🚨 If you don't have git in your machine, you can install it [here](https://git-scm.com/downloads).

## :lipstick: Front-end

### :construction: Installing Dependencies

In rankaa folder, open `frontend` folder:

```bash
$ cd frontend

# And install dependencies by the following command:

$ yarn install
```

### :arrow_forward: Running Front-end

Run the following command to see the application:

```bash
$ yarn start
```

The application will be available on `http://localhost:3000`.

🚨 Remember to start the backend!

## :file_cabinet: Back-end

### :construction: Instalando Dependências

🚨 This project use Python 3.

Inside rankaa folder, open `new.backend` folder:

```bash
$ cd new.backend

# Install Pipenv if you don't have it:

$ pip install pipenv
```

### :wrench: Setting Back-end

Into `new.backend` folder, create a `.env` file:

```bash
$ touch .env
```

Add the following content into the `.env`:

```
FLASK_APP=app.py
FLASK_ENV=development
```


### :arrow_forward: Running Back-end

In the terminal, active the environment with:

```bash
# To install dependencies

$ pipenv install

# To active virtual environment

$ pipenv shell

# To run backend

$ flask run
```

The Application will be avaible on `http://localhost:5000`.


## :page_facing_up: License

This project uses [MIT](https://github.com/3salles/rankaa/blob/develop/LICENSE) license.

## :woman_technologist: :man_technologist: Authors

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
