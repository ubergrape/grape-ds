import grapeTokens from './grape-tokens.json'
import unicornTokens from './unicorn-tokens.json'


const themes = {
    'grape': grapeTokens,
    'unicon': unicornTokens,
}

const theme = (window as any).__THEME__;

console.log("theme", theme)

let tokens = grapeTokens
if (theme) {
    tokens = themes[theme]
}

export default tokens
