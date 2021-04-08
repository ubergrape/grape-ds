import grapeTokens from './grape-tokens.json'
import unicornTokens from './unicorn-tokens.json'

const themes = {
  grape: grapeTokens,
  unicorn: unicornTokens,
}

let theme = 'grape'

if (
  typeof window !== 'undefined' &&
  (window as any).grapeClient !== 'undefined'
) {
  theme = (window as any).grapeClient?.theme
}

export default themes[theme]
