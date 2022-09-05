
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p align="center">
    <a href="https://raaghu.io" target="_blank">
        <img src="./raaghu_icon.png" alt="logo" width="125"/>
    </a>
<p/>
<p>
<h1 align="center">Raaghu Micro-Frontend</h1>
<p/>

<p align="center">
    <a href="https://raaghu.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu/issues/new">Report Bug</a>
</p>

<!-- vscode-markdown-toc -->



* [ Introducing raaghu](#Introducingraaghu-elements)
*  [Demo](#Demo)
*  [Features](#Features)
*  [Prerequisites](#pre)
*  [How to Set up `raaghu-mfe` for Development?](#setup)
*  [Built With](#BuiltWith)
*  [ Contributing to `raaghu`](#ContributingtoRaaghu)
*  [ Support](#Support)
*  [Contributors](#WAiTechnologyContributors)

##  <a name='Introducingraaghu-elements'></a>Introducing `raaghu`

__`raaghu`__ micro-frontend(mfe) is an angular based open-source software built with Bootstrap 5 and Storybook framework.raaghu mfe enables you to build complex components as well as UI layout by applying CSS to the inbuilt __`raaghu-elements`__, components and pages according to the wireframe design<br>
Micro front-end architecture breaks page designs into components that results in a high-level reusabiility, flexibility, with ease of maintainence.


##  <a name='Demo'></a>Demo

Here is a quick demo

<img title="imge" alt="gif" src="../static/raaghu.gif">


Share your appreciation to raaghu design system contributors with a ⭐️

##   <a name='Features'></a> Features

## 🔢 High reusability
- Promotes reusability throughout the UI and pages
- Reduces code duplication and helps in delivering a more consistent, even UI



## 🏗️ Micro Front End Architecture
- Each element is a separate micro front end on its own
- Elements can be worked on in isolation



## 📢 Theming
- Achieve high level customization on elements,pages with raaghu theme engine
- Set required tone of your projects with only a few css variables



## 📱 Responsive and mobile-friendly
- All of the elements are built for a wide variety of screen sizes



## Acceleration
- Achieve up to 3X acceleration with front end development through modular creation and component composition



## Scalability
- Provides better scalability as each codebase is much simpler to build, test and maintain



&emsp;   <img title="a title" alt="Alt text" src="../static/MicrosoftTeams-image (6).png"> &emsp;    


## <a name='pre'></a> Prerequisites for development
# ⚛️

> #### To use the raaghu, you should be familiar with:
> - Angular: Desired version-13.x 
> - TypeScript
> - JavaScript
> - HTML
> - CSS

> #### To setup raaghu on your local system:
> - Angular-CLI (Command Line Interface): version 13.x
> - Node.js: version 16.x
> - NPM (Node Package Manager): version 8.x

## <a name='setup'></a> How to Set up `raaghu-mfe` for Development?
You can run `raaghu-mfe` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu.git
```
<img src="../static/clone.png" alt="Screenshot-17"  border="0"><br />

2. Change the working directory
 
```bash
cd raaghu/raaghu-elements
```



3. Install dependencies

```bash
npm install
```
<img src="../static/npm-install.png" alt="Screenshot-17"  border="0"><br />

4. Change the working directory

```bash
cd raaghu/raaghu-mfe
```
<img src="../static/cd.png" alt="Screenshot-17"  border="0"><br />

5. Install dependencies

```bash
npm install
```

6. Synchronize raaghu-elements repository

```bash
npm run sync-elements
```
<img src="../static/npm sync elements.png" alt="Screenshot-17"  border="0"><br />
> **_NOTE:_** Above command will sync/copy raaghu-elements from public repository to the above local MFE project.

7. Patch Dev Server

```bash
npm run patch-dev-server
```
<img src="../static/Screenshot (14).png" alt="Screenshot-17"  border="0"><br />

8. Build and serve

```bash
npm run start
```
<img src="../static/npm-run start.png" alt="Screenshot-17"  border="0"><br />
9. Storybook


```bash
# View all pages and components and elements inside the storybook
npm run storybook 
```
<img src="../static/npm run storybook.png" alt="Screenshot-17"  border="0"><br />


##  Development support

1. Create a common Library

```bash
npm run lib <library_name>
```

2. Create a component

```bash
npm run page rds-components <component_name>
```

3. Create a screen / MFE

```bash
npm run mfe <mfe_name> <port_number>
```

4. Create a page within an existing MFE

```bash
npm run page <mfe_name> <page_name>
```


##  <a name='BuiltWith'></a>Built With
- [Angular 13](https://angular.io/): Modern web Developer's platform
- [Bootstrap 5](https://getbootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [raaghu-elements Libraries](https://www.npmjs.com/package/rds-elements): Build bulletproof UI components faster
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster
 
 ##  <a name='ContributingtoRaaghu'></a>🤝 Contributing to `Raaghu`
Help us grow by contributing to raaghu micro front-end design system.

##  <a name='Support'></a>🙏 Support

We all need support and motivation. `Raaghu` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

<h3 className="align">
A ⭐️ to <b>Raaghu</b> is to build its triceps 💪 stronger.
</h3>

##  <a name='WAiTechnologyContributors'></a> Contributors ✨

Thanks goes to these wonderful people and Wai technology.


