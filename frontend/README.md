<p align="center">

  <h3 align="center">Rankaa</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Version&message=1.0&color=7159c1" alt="Version-1.0" />
  <img src="https://img.shields.io/static/v1?label=Desktop&message=Unfinished&color=orange" alt="Desktop-unfinished" />
  <img src="https://img.shields.io/static/v1?label=Mobile&message=Unfinished&color=FFA500" alt="Mobile-unfinished" />
  <img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="Lincense" />
</p>

<p align="center">
    This website was created during the subject Software Design and Development at UFMA
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
    * [Setting Front-end](#wrench-setting-front-end)
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

### :art: Layout

You can acess the project's layout in links below:

* [Desktop](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web/duplicate)
* [Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile/duplicate)

🚨 You need have a [Figma](https://www.figma.com) account to acess the layout.

### :computer: Technologies

* [TypeScript](https://www.typescriptlang.org)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com)
* [Express](https://expressjs.com)
* [Mapbox](https://www.mapbox.com)
* [TypeORm](https://typeorm.io#/)
* [SQLite](https://www.sqlite.org/index.html)
* [Axios](https://www.npmjs.com/package/axios)
* [Expo](https://expo.io)

### :sparkles: Features

  - [x] Desktop Version
  - [x] Mobile Version

## :bricks: Installation

This project use [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com), you will need them to build its dependencies.

### :construction: Prerequisites

Clone this project repository:
```bash

$ git clone https://github.com/3salles/Happy.git

#Enter in `Happy` folder:

$ cd Happy
```

🚨 If you don't have git in your machine, you can install it [here](https://git-scm.com/downloads).

## :lipstick: Front-end

### :construction: Installing Dependencies

In Happy folder, open `web` folder:

```bash
$ cd web

# And install dependencies by the following command:

$ yarn install
```

### :wrench: Setting Front-end

To use [Mapbox](https://www.mapbox.com) you must have a Token acess. Create a account and take your token acess. Go to `OrphanagesMap.tsx` and change `REACT_APP_MAPBOX_TOKEN` with you token acess in the following line:

```TypeScript
<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
```

### :arrow_forward: Running Front-end

Run the following comand to see the application:

```bash
$ yarn start
```

The application will be avaible on `http://localhost:3000/`.

🚨 Remember to start the backend!

## :file_cabinet: Back-end

### :construction: Instalando Dependências

Inside Happy folder, open `backend` folder:

```bash
$ cd backend

# Install dependencies woth following comand:

$ yarn install
```

### :wrench: Setting Back-end

Create database tables with following comand:

```bash
$ yarn typeorm migration:run

# If you want to drop the database tables:

$ yarn typeorm migration:revert
```

### :arrow_forward: Running Back-end

Run following comand to start back-end:

```bash
$ yarn dev
```

The Application will be avaible on `http://localhost:3333/`.

:warning: Modify `LOCALHOST` variable address to  your network address in `images_views.ts` archive:

```TypeScript
    return {
      id: image.id,
      url: `http://LOCALHOST:3333/uploads/${image.path}`,
    };
```

## :iphone: Mobile

This project uses [Expo](https://expo.io), install it before go to next step.

### :construction: Installing Dependencies

Inside Happy folder,open `mobile` folder:

```bash
$ cd mobile

# Install dependencies with following comand:

$ yarn install
```

### :arrow_forward: Running Mobile

Run mobile with following comand:

```bash
$ expo start

# If you want to use yarn:

$ yarn start
```

The application will open a window in your browser. If you want to use your mobile to run the application, just use the QR code. If you want to run in your desktop, read how to use [Android](https://docs.expo.io/workflow/android-studio-emulator/) emulator or [iOS](https://docs.expo.io/workflow/ios-simulator/) emulator.

## :page_facing_up: License

This project uses [MIT](https://github.com/3salles/Happy/blob/main/LICENSE) lincense.

## :woman_technologist: :man_technologist: Author
<p align="center">
  <a href="https://github.com/3salles"><img src="https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles" alt="Github" /></a>
  <a href="https://www.linkedin.com/in/beatriz-salles-b701a31a6/"><img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6" alt="LinkendIn" /></a>
  <a href="mailto:beatrizsallesss@gmail.com"><img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com" alt="Gmail" /></a>
</p>

<p align="center">Developed with 💜 by Beatriz Salles</p>
