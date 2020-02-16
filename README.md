## Overview

This project is a light-weight react and redux starter boilerplate that builds on top of [Create React App](https://github.com/facebook/create-react-app).

This could be the right choice for you, if you would like to quickly start a fontend project based on React and Redux without worrying about all kinds of configurations (e.g. install redux related modules, editor setup, testing configuration, etc). The goal of this starter template is to allow you to jump directly into writing application logic.

In addition to the libaries that ships by default with [create-react-app](https://create-react-app.dev), this starter template adds a few additional popular ones to start with:
- [Sass](https://www.npmjs.com/package/node-sass)
- [Flow](https://flow.org/en/docs/getting-started)
- [Redux](https://redux.js.org/) (including [React-Redux](https://react-redux.js.org/) and [Redux-Thunk](https://www.npmjs.com/package/redux-thunk))
- [Enzyme](https://airbnb.io/enzyme/)

For the best experience, it's recommended to use [Visual Studio Code](https://code.visualstudio.com/) as the text editor since we added default settings to work with Prettier and ESLint.

## Get Started
#### Component
Your component hierarchy starts from `src/index.js`, which has its render output already wrapped by a singleton redux store.

#### Store
Your redux store logic starts from `src/store/rootReducer.js`. You can create nested reducers via `createCombineReducers` API.

#### Test
A sample smoke test using `enzyme#shallow` is in `src/components/app/__tests__/App.test.js`. You are welcome to use whatever file structure you like to organize tests.


## Available Scripts (provided by create-react-app)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
