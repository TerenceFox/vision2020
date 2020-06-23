# Vision 2020 Virtual Benefit

This is a simple static site meant to be a landing page for a virtual benefit for a fundraiser. It was built with [Gatsby](https://www.gatsbyjs.org/), a React-based static site generator. The current version has been updated for those visiting the site after the event, but all of the core functionality is still active. 

## Features

- [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image/) plugin uses Gatsby's image processing to optimize images dynamically and allow for lazy-loading
- Given tight time constraints, this project uses React Bootstrap to use their pre-built UI components such as `ResponsiveEmbed, Modal and Carousel`.
- Uses Gatsby SASS plugin to customize Bootstrap according to client design mockups and brand guidelines

## Installing locally

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get started, you only need Node, NPM and Git. My version numbers at time of development are below:

```
node v12.16.1
npm 6.14.4
git version 2.24.3 
```

### Installing

After cloning the project locally, navigate to the root of the project folder and install with npm: 

```
npm install
```

There are a number of useful development scripts that leverage the gatsby CLI, which you can install globally with: 

```
npm install -g gatsby-cli
```

If you have the CLI installed, you can use `npm run` or `yarn` to run the scripts as listed in the `package.json`, otherwise you can use `npx` to use the gatsby commands directly, i.e. you can build for production with `npx gatsby build`. 

## Deployment

Gatsby will compile the static files for production with `gatsby build` into the `public` folder, at which point they're suited for any kind of JAMStack solution. 

## Built With

* [Gatsby](https://www.gatsbyjs.org/) - The web framework used
* [React-Bootstrap]https://react-bootstrap.github.io/) - CSS Framework
* [Surge](https://surge.sh/) - Straightforward free hosting
* [Curator.io](https://curator.io/) - Client-provided Instragram feed

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
