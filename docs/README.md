# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

If you ran previously `yarn` in the root directory of the repository then all packages already in their places. Otherwise, hit `yarn` to install dependencies for `docs` folder.

## Local development

The components from `../web` are used in the docs and are imported with a symlink. Before running commands below make sure you installed dependencies for `../web`. You need to build them first, in the root directory of the repository:

```bash
yarn build:components
```

Install freshly built aurora-ui in `docs`:
```bash
yarn add aurora-ui@../web
```

Run the development server:
```bash
yarn start
```

This will open up a browser window. Most changes are reflected live without having to restart the server.

### Using `aurora-ui` as NPM package (not available yet)

Automatically `aurora-ui` will be installed from NPM with other packages with running `yarn`. Please make sure you have the latest version from NPM on your branch.
If you want to use local `aurora-ui` components, follow the guide below.

### Local changes in `aurora-ui` components

When you are working on components and want to preview them in Docusaurus please follow automatic or manual workflow to install latest changes from `../web` folder:

#### Automatic workflow

Use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/), so changes can appear faster in docusaurus on each change of aurora-ui build.

In the `web` directory:
```
yarn link
```

In the `docs` directory:
```
yarn link aurora-ui
```

If you're working with local directory, please additionally follow this workaround and link `react` and `react-dom` in root directory of the repository and use them in `docs` in same way as `aurora-ui`:
https://github.com/facebook/react/issues/14257#issuecomment-595183610.

In the root directory of the repository:
```bash
cd node_modules/react
yarn link
cd ../react-dom
yarn link
cd ../../docs
yarn link react
yarn link react-dom
```

To rebuild every time you change something in web, run this in the root directory of the repository:
```bash
yarn build:components:watch
```

Now you can run Docusaurus:
```
yarn start
```

Docusaurus will automatically rebuild.

#### Manual workflow

In the root directory of the repository:
```bash
yarn build:components
```

Install freshly built aurora-ui in `docs`:
```bash
cd docs
yarn add aurora-ui@../web
```

Now you can run Docusaurus:
```
yarn start
```

Docusaurus will automatically rebuild.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```bash
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

