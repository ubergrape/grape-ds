# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation


Make sure to run the commands in this directory:

```bash
cd docs
```

install all requirements:

```bash
yarn
```

### Local Development

the components from `../web` are used in the docs and are imported with a symlink. You need to build them first:

```bash
cd ..
yarn build:components
```

run development server:

```bash
cd docs
yarn start
```

This will open up a browser window. Most changes are reflected live without having to restart the server.

#### Changes in components

every time you change something in the components you need to build them again:

in the root directory:
```bash
yarn build:components
```

or in the web directory
```bash
yarn build:lib
```

then you must run `yarn` again for docusaurus and restart it:
```bash
yarn
yarn start
```

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

