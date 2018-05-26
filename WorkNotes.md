## Table of Contents
- [Tech Stack](#tech-stack)
- [Coding Style](#coding-style)
- [Linting Settings](#linting-settings)
- [Upload Photos](#upload-photos)


## Tech Stack
### [Layout Design](https://material-ui.com/layout/basics/)
> Fixed Screen width
- **`xs`**, extra-small: 0px or larger  
- **`sm`**, small: 600px or larger  
- **`md`**, medium: 960px or larger  
- **`lg`**, large: 1280px or larger  
- **`xl`**, xlarge: 1920px or larger  

## Coding Style

### airbnb react style
https://github.com/airbnb/javascript/tree/master/react

## Linting Settings
### Eslint
- Local Installation and Usage
```
yarn add eslint -D
./node_modules/.bin/eslint --init
```
### Tips
#### [Solving linter error no-undef for document](https://stackoverflow.com/questions/41858052/solving-linter-error-no-undef-for-document)

There are a number of ways to solve/get around this. The two key ways are to either specify document as global or to set the eslint-env as browser (what you probably want). You can do this 1) in-file, 2) in the configuration, or even 3) when running from the CLI.
- In-file
  - Set the environment as browser in your file:
```js
/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
```
  - Add it as a global in the file itself:
```js
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
```

- In the eslint configuration:
  - Set the environment as browser in the configuration:
```js
{
  "env": {
    "browser": true,
    "node": true
  }
}
```

  - Add it as a global in the configuration:
```js
{
  "globals": {
    "document": false
  }
}
```

### prettier and Eslint Integration
https://prettier.io/docs/en/eslint.html
#### Use ESLint to run Prettier
<hr>
If you're already running ESLint in your project and would like to do all of your style checking with a single command execution, you can ask ESLint to run Prettier for you.

Just add Prettier as an ESLint rule using [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).
```bash
yarn add --dev prettier eslint-plugin-prettier
```
.eslintrc.json:
```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
#### Turn off ESLint's formatting rules
<hr>
Whether you run Prettier via ESLint or run both tools separately, you probably only want to hear about each formatting issue once, and you especially don't want ESLint to complain about formatting "issues" which are simply a different preference than what Prettier does.

So you'll probably want to disable the conflicting rules (while keeping around other rules that Prettier doesn't care about). The easiest way to do this is to use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). It's a one liner that can be added on-top of any existing ESLint configuration.

```bash
yarn add --dev eslint-config-prettier
```

.eslintrc.json:
```json
{
  "extends": ["prettier"]
}
```
There are a few rules that this disables that you may want to turn back on as long as you don't use them with particular options which conflict with Prettier. See [the docs](the docs) for details.


#### Why not both?
<hr>
`eslint-plugin-prettier` exposes a "recommended" configuration that turns on both `eslint-plugin-prettier` and `eslint-config-prettier`, all you need in your .eslintrc.json is:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

Remember to install both `eslint-plugin-prettier` and `eslint-config-prettier`:

```bash
yarn add --dev eslint-plugin-prettier eslint-config-prettier
```

#### Resources
- [Specifying Globals with ESLint](http://eslint.org/docs/user-guide/configuring#specifying-globals)
- [Specifying Environments with ESLint](http://eslint.org/docs/user-guide/configuring#specifying-environments)
- [Specifying env with ESLint CLI](http://eslint.org/docs/user-guide/command-line-interface#env)
- [Specifying globals with ESLint CLI](http://eslint.org/docs/user-guide/command-line-interface#global)
- [Eslint React Plugin Rules](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)


## Upload Photos
### Resources
[react-dropzone](https://react-dropzone.js.org/)
