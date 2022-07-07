
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p align="center">
    <a href="https://raaghu.io" target="_blank">
        <img src="./static/banner1.png" alt="logo" width="1200"/>
    </a>
<p/>
 
 


<h3 align="center" style="border-bottom:0;">
    <a href="https://raaghu.io" target="blank">Get Started</a>
    ·
    <a href="https://raaghu.io" target="blank">Tutorials </a>
    ·
    <a href="https://raaghu.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu-elements/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Wai-Technologies/raaghu-elements/issues/new">Request Feature</a>
    
</h3>

<p align="center">
    A progressive Angular based framework leveraging micro front end capabilities to build efficient, reliable </br> and scalable  front-end applications. 
</p>
</br></br>
<h1 align="center" style="border-bottom:0;">
What is Raaghu?
</h1>

<p align="center">
`raaghu-elements` is an opensource Angular library framework built on top of Bootstrap 5 and Storybook offering highly customizable and reusable Angular UI elements. Raaghu elements can be used as a base to build complex components and UI layouts whilst maintaining a high level of reusability.
</p>


<p align="center">
    <a href="https://raaghu.io" target="_blank">
        <img src="./static/why raaghu.png" alt="logo" width="1200"/>
    </a>
<p/>

</br></br></br></br>









# 🚀 Demo
Here is a quick [demo](https://www.raaghu.io) of the elements. We hope you enjoy it.

Liked it? Please give us a ⭐️ to show your appreciation

Many Thanks to all the `supporters` who have helped this project with stars(⭐)


# 🔥 Features

## 🔢 High reusability
 - Promotes reusability throughout the UI and pages
 - Reduces code duplication and helps in delivering a more consistent and even UI

## 📱 Responsive and mobile-friendly
- All of the elements are built for a wide variety of screen sizes


# 🏗️ How to Set up `raaghu-elements` for Development?
You can run `raaghu-elements` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu-elements.git
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
> **_NOTE:_** Above comman will create a folder named "rds-elements" with all the libraries

5. Create a new blank angular project

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


# 🍔 Built With
- [Angular Libraries](https://angular.io/guide/libraries): Build bulletproof UI components faster
- [Bootstrap 5](https://bootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster


# 🛡️ License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.


# 🦄 Upcoming Features
`raaghu-elements` has all the potentials to grow further. Here are some of the upcoming features,

- ✔️ Custom plugin to reveal the reusability within your angular project
- ✔️ Ability to convert existing elements in a project into angular library enabled elements
- ✔️ Import custom elements into the library
- ✔️ Better Performance
- ✔️ Converiting plain angular components to custom elements

If you find something is missing, we are listening. Please create a feature request [from here](https://github.com/Wai-Technologies/raaghu-elements/issues/new).


# 🤝 Contributing to `Raaghu`
Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can work on any features [listed here](https://github.com/Wai-Technologies/raaghu-elements#-upcoming-features) or create one on your own. After adding your code, please send us a Pull Request.  




# 🙏 Support

We all need support and motivation. `Raaghu` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

<h3 className="align">
A ⭐️ to <b>Raaghu</b> is to build its triceps 💪 stronger.
</h3>



## WAi Technology Contributors ✨

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

