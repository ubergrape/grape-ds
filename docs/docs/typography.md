---
id: typography
title: Typography
sidebar_label: Typography
---

import { Flex, Headline, Text, Monospace } from "aurora-ui";

Typography can help create clear hierarchies, organize information and guide people through our products.  We use type tokens to organize our typography, and we use typography components to consistently apply it to our components and interfaces.  
## Typeface
We use the typeface **Noto Sans** with font weights **Regular** (400) and **SemiBold** (600), and **Noto Mono** when presenting code snippets, for digital experiences. Noto Fonts can be accessed and downloaded from [Google Noto Fonts](https://www.google.com/get/noto/).
## Typographic scale
To keep our typographic scale simple we limit and adjust it to the needs within our products. We use a reduced set of sizes: 2 for headlines, 3 for body text, 1 for monospace text.  

For designers, all our typography tokens are ready to be used in Figma [Grape DS Foundation - Typography](https://www.figma.com/file/1H80rWSPzHMnJ66iic8z5q/?node-id=125%3A270), and available as text styles from the Figma Team Library.
### Headlines
Sizes define the visual appearance and can style any semantic HTML element from `h1` to `h5`, `div` or `span`. For page headlines use **Headline page**, for all other headlines **Headline base**.  
<Flex gap="2x" direction="column" style={{ border: 'solid 1px #f1f1f1', padding: 10 }}>
<Headline size="page">Headline page (24/1.4)</Headline>
<Headline size="base">Headline base (16/1.6)</Headline>
</Flex>

### Body text
**Large** size is used for main body text on pages like articles with a decent amount of text to read. **Base** size is our standard text size used within our products, and **small** size is used for captions, annotations, notes and labels. If we display code, **monospace** is available.
<Flex gap="2x" direction="column" style={{ border: 'solid 1px #f1f1f1', padding: 10 }}>
<Box />
<Text size="large">Large body text (16/1.4)</Text>
<Text size="base">Base body text (14/1.6)</Text>
<Text size="small">Small body text (12/1.4)</Text>
<Monospace>Base body monospace text (14/1.6)</Monospace>
</Flex>

## Type color
Type color should be carefully considered, with accessibility and legibility as main concerns. Keep color neutral in running text. Color is not for decoration.
<Flex gap="2x" direction="column" style={{ border: 'solid 1px #f1f1f1', padding: 10 }}>
<Text size="base" color="primary">Primary text color</Text>
<Text size="base" color="secondary">Secondary text color</Text>
<Text size="base" color="link">Link text color</Text>
<Text size="base" color="personal">Personal text color</Text>
</Flex>
<span>&nbsp;</span>

:::note
When used on colored backgrounds, adjust for sufficient contrast and use inverse text color if necessary. In light color mode the background color should always be lighter than the text color, and we suggest applying light-dark-contrast to your elements.
:::
