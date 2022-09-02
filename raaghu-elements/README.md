    <a href="https://raaghu.io" target="_blank">
        <img src="./raaghu_icon.png" alt="logo" width="125"/>
    </a>
</p>
<p>
<h1 align="center">Raaghu Elements</h4>
</p>

<p align="center">
<a href="https://npmjs.org/rds-elements"><img src="https://img.shields.io/npm/v/rds-elements/latest.svg" alt="npm latest version" ></a>
<a href="https://npmjs.org/rds-elements"><img src="https://img.shields.io/npm/v/rds-elements/next.svg" alt="npm next version" ></a>
</br>
<a href="https://github.com/Wai-Technologies/raaghu/blob/main/LICENSE" target="blank">
<img alt="GitHub licence" src="https://img.shields.io/github/license/Wai-Technologies/raaghu?style=social" />
</a>
<a href="https://github.com/Wai-Technologies/raaghu/stargazers" target="blank">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/Wai-Technologies/raaghu?style=social"/>
</a>
<a href="https://github.com/Wai-Technologies/raaghu/issues" target="blank">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/Wai-Technologies/raaghu?style=social"/>
</a>
<a href="https://github.com/Wai-Technologies/raaghu/pulls">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/Wai-Technologies/raaghu?style=social" />
</a>
</p>

<p align="center">
    <a href="https://raaghu.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu/issues/new">Request Feature</a>
</p>

<!-- vscode-markdown-toc -->
* 1. [ Introducing raaghu-elements](#Introducingraaghu-elements)
* 2. [<a name='Demo'>Demo](#anameDemoDemo)
* 3. [<a name='Features'> Features](#anameFeaturesFeatures)
	* 3.1. [🔢 High reusability](#Highreusability)
	* 3.2. [📱 Responsive and mobile-friendly](#Responsiveandmobile-friendly)
* 4. [<a name='Setup'> How to Set up `raaghu-elements` for Development?](#anameSetupHowtoSetupraaghu-elementsforDevelopment)
* 5. [Built With](#BuiltWith)
* 6. [License](#License)
* 7. [Upcoming Features](#UpcomingFeatures)
* 8. [🤝 Contributing to `Raaghu`](#ContributingtoRaaghu)
* 9. [🙏 Support](#Support)
* 10. [WAi Technology Contributors ✨](#WAiTechnologyContributors)

<<<<<<< HEAD
<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc --><p align="center">

##  1. <a name='Introducingraaghu-elements'></a> Introducing raaghu-elements 
=======

# Introducing `raaghu-elements` 
>>>>>>> 4be3cb5fac08c9af237a85b5e42a27f69b2f81d4

`raaghu-elements` is an opensource Angular library framework built on top of Bootstrap 5 and Storybook offering highly customizable and reusable Angular UI elements.

Raaghu elements can be used as a base to build complex components and UI layouts whilst maintaining a high level of reusability.


<<<<<<< HEAD
##  2. <a name='anameDemoDemo'></a><a name='Demo'>Demo
=======
# Demo
>>>>>>> 4be3cb5fac08c9af237a85b5e42a27f69b2f81d4
Here is a quick [demo](https://www.raaghu.io) of the elements. We hope you enjoy it.

Liked it? Please give us a ⭐️ to show your appreciation

Many Thanks to all the `supporters` who have helped this project with stars(⭐)


<<<<<<< HEAD
##  3. <a name='anameFeaturesFeatures'></a><a name='Features'> Features
=======
# Features
>>>>>>> 4be3cb5fac08c9af237a85b5e42a27f69b2f81d4

###  3.1. <a name='Highreusability'></a>🔢 High reusability
 - Promotes reusability throughout the UI and pages
 - Reduces code duplication and helps in delivering a more consistent and even UI

###  3.2. <a name='Responsiveandmobile-friendly'></a>📱 Responsive and mobile-friendly
- All of the elements are built for a wide variety of screen sizes


<<<<<<< HEAD
##  4. <a name='anameSetupHowtoSetupraaghu-elementsforDevelopment'></a><a name='Setup'> How to Set up `raaghu-elements` for Development?
=======
# How to Set up `raaghu-elements` for Development?
>>>>>>> 4be3cb5fac08c9af237a85b5e42a27f69b2f81d4
You can run `raaghu-elements` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu.git
```

2. Change the working directory

```bash
cd raaghu-elements
```

3. Install dependencies

```bash
npm install
```

4. Build all the libraries

```bash
npm run build-all
```
> **_NOTE:_** Above command will create a folder named "rds-elements" with all the libraries

5. Create a new blank angular project: new directory, other location

```bash
# use angular CLI to create a new project
ng new <project_name>

# change directory to newly created project's mode modules folder
cd <project_name>/node_modules

# copy the build folder "rds-elements", created in step 4
```

6. Use rds-elements libraries

```bash
# Import it in your app.module.ts file, include the library
import { RdsButtonModule } from "rds-elements/rds-button"

# import the above module
imports: [
  RdsButtonModule
]

# Use it in the html file
<rds-button
  [color]="buttonColorType"
  [block]="true"
  size="'medium'"
  [label]="buttonLabel"
  [disabled]="!loginForm.valid"
  (click)="submit()">
</rds-button>
```

7. Build and serve

```bash
npm start
```

8. Storybook

```bash
# View all elements inside storybook
npm run storybook 
```


<<<<<<< HEAD
##  5. <a name='BuiltWith'></a>Built With
=======
# Built With
>>>>>>> 4be3cb5fac08c9af237a85b5e42a27f69b2f81d4
- [Angular Libraries](https://angular.io/guide/libraries): Build bulletproof UI components faster
- [Bootstrap 5](https://bootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster


<<<<<<< HEAD
##  6. <a name='License'></a>License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.


##  7. <a name='UpcomingFeatures'></a>Upcoming Features
=======
# License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.


# Upcoming Features
>>>>>>> 4be3cb5fac08c9af237a85b5e42a27f69b2f81d4
`raaghu-elements` has all the potentials to grow further. Here are some of the upcoming features,

- ✔️ Custom plugin to reveal the reusability within your angular project
- ✔️ Ability to convert existing elements in a project into angular library enabled elements
- ✔️ Import custom elements into the library
- ✔️ Better Performance
- ✔️ Converiting plain angular components to custom elements

If you find something is missing, we are listening. Please create a feature request [from here](https://github.com/Wai-Technologies/raaghu/issues/new).


##  8. <a name='ContributingtoRaaghu'></a>🤝 Contributing to `Raaghu`
Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can work on any features [listed here](https://github.com/Wai-Technologies/raaghu#-upcoming-features) or create one on your own. After adding your code, please send us a Pull Request.  




##  9. <a name='Support'></a>🙏 Support

We all need support and motivation. `Raaghu` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

<h3 className="align">
A ⭐️ to <b>Raaghu</b> is to build its triceps 💪 stronger.
</h3>



##  10. <a name='WAiTechnologyContributors'></a>WAi Technology Contributors ✨

Thanks goes to these wonderful people and Wai technology.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

[Omkar Choudhari](https://github.com/omkarchoudhari), [Alok Nakhate](https://github.com/alok-nakhate), [Rohit Pingale](https://github.com/pingroh), [Mohan Bari](https://github.com/mohanbari), [Apoorva Lele](https://github.com/apoorvalele), [Yohul Chitre](https://github.com/yohulchitre),
[Priyanka Shinkar](https://github.com/Priyanka-Shinkar), [Suraj Khupse](https://github.com/suraj-khupse), [Pratheesh Krishnan](https://github.com/pratheesh-rishnan), [Rahul Patil](https://github.com/rahulp34),
[Ketan khalate](https://github.com/Ketan-Khalate), [Obaid Ur Rahman](https://github.com/obaid-ur-rahman), [Anupriya Biju](https://github.com/Anupriya-Biju), [Niphy Anto](https://github.com/Niphy-Anto),
[Neeraj Bhakre](https://github.com/neeraj-bhakre), [Basavraj Chorgasti](https://github.com/basavraj-chorgasti), [Shrikant Birajdar](https://github.com/shrikant-birajdar), [Omkar Rairikar](https://github.com/omkarrairikar),
[Swapnil Ghormode](https://github.com/DevSwapnil22)

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

