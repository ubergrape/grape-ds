---
id: internationalization
title: Internationalization
sidebar_label: Internationalization
---
At Grape we aim to build interfaces that work in all of our markets and can be used in different locales. When naming features or products be mindful of connotations in other cultures to avoid being offensive or insensitive.  
## Text expansion
When we design interfaces and components we consider additional space for words and text of greater length. When products are localized to different languages, content can be up to 50% longer on average than in English. We can't always rely on spaces for line breaking and text wrapping as individual words can be longer. We need to be flexible with sepcific formatting and text expansion and consider for example labels that are short in English but that include additional words or phrases specific to the very language when being translated. Arrange elements in your components and modules in a way that allows for longer text without hindering information hierarchy or overlapping with other elements.  
## Word order
Consider that different languages can have different word order for the same expression. Avoid using components or translatable strings in a specific order (concatenated strings) to build sentences. Translators need to be able to change the word order when the interface is being translated.
