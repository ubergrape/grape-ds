# Storybook for web components

This directory contains our web storybook project. It is built with [Storybook](https://storybook.js.org/) and contains all React components which can be used in the Grape web client, with so called stories to showcase their usage and interactively try them out in the browser.


## Develop and building

### Develop

Make sure to run all commands in this directory:

```bash
cd web
```

Install all dependencies:

```bash
yarn
```


Run the development server locally:

```bash
yarn start
```


### Update icons

The SVG icons are in a separate repository [ubergrape/grape-icons](https://github.com/ubergrape/grape-icons). They are pulled in as a dependency with `yarn`.

1. Update icons from the repository:

    ```bash
    yarn remove grape-icons
    yarn add ubergrape/grape-icons
    ```

2. Generate React components:

    ```bash
    yarn svgr
    ```

    Old icon components will be removed, outdated ones will be updated and new icons components will be created.

    The generated icon components are in `src/icons`.

3. Manually update the `IconTypes`:

    edit `src/components/icon/index.tsx` and update `IconTypes` to match the icon names in `src/icons`

### Build for release

build the storybook pages:

```bash
yarn build:storybook
```

(or run `yarn build:storybook` in the root directory of this repo)

build the components package for npm:

```bash
yarn build:lib
```

(or run `yarn build:components` in the root directory of this repo)


## Adding content

### Stories

create a new file `something.stories.mdx` in `src/stories`. Example content:

```markdown
import { Meta } from '@storybook/addon-docs/blocks';
import image1 from '../someimage.jpg';

<Meta title="Blah" />

some text

## blub

look at this image:

<img src={image1} height="200px" />

```

* The image in this example must be placed in `src/someimage.jpg`.
* Meta title "Blah" is used for the page name in Storybook
* more information on the [MDX format in the Storybook docs](https://storybook.js.org/docs/react/api/mdx)
