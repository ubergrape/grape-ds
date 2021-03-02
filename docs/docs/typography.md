---
id: typography
title: Typography
sidebar_label: Typography
---

import { Flex, Headline, Text, Monospace } from "aurora-ui";

Typography can help create clear hierarchies, organize information and guide people through our products.  We use type tokens to organize our typography, and we use typography components to consistently apply it to our components and interfaces.  
## Typeface
We use the typeface **Noto Sans** with font weights **Regular** (400) and **SemiBold** (600), and **Noto Mono** when presenting code snippets, for digital experiences. Noto Fonts can be accessed and downloaded from [Google Noto Fonts](https://www.google.com/get/noto/).
## Typography scale and line height
To keep our typographic scale simple we limit and adjust it to the needs within our products. We use a reduced set of sizes: 2 for headlines, 3 for body text, 1 for monospace text.  
<Flex gap="2x" direction="column" style={{ border: 'solid 1px #e2e2e2', padding: 10 }}>
<Headline size="page">Heading page (24/1.4)</Headline>
<Headline size="base">Heading base (16/1.6)</Headline>
<Text size="large">Large body text (16/1.4)</Text>
<Text size="base">Base body text (14/1.6)</Text>
<Text size="small">Small body text (12/1.4)</Text>
<Monospace>Base body monospace text (14/1.6)</Monospace>
</Flex>

## Applying typography
Utilize typography scale and text formatting to establish hierarchy and clarity and adjust voice or meaning. Refrain from using color as a primary method of emphasis. Emphasized style (semi-bold) is used to add hierarchy within a sentence or to call attention, for example in buttons.  

Don't use underlines for adding emphasis, they are reserved for links only.
### Heading
Heading is used to create levels of hierarchies between text. Sizes define the visual appearance and can style any semantic HTML element from `h1` to `h5`, `div` or `span`. For page headlines use **Headline page**, for all other headlines **Headline base**.
### Body
Body is primarily used for Aurora components and blocks of text. **Large** size is used for main body text on pages like articles with a decent amount of text to read. **Base** size is our standard text size used within our interfaces. **Small** size is used for disclosing extra information or smaller items in hierarchical relationship of text (like captions, labels).
### Code
**Monospace** is used for text that represents code.
## Resources
For designers, all our typography tokens are ready to be used in Figma, and available as text styles from the Figma Team Library.
- [Grape DS Foundation - Typography](https://www.figma.com/file/1H80rWSPzHMnJ66iic8z5q/?node-id=125%3A270)
