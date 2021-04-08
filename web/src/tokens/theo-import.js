const fs = require('fs')
const theo = require('theo')
const camelCase = require('lodash.camelcase')
const mapKeys = require('lodash.mapkeys')

theo.registerTransform('web', ['color/hex'])

const themes = ['grape', 'unicorn']

themes.forEach(theme => {
  // eslint-disable-next-line no-console
  console.log(theme)
  theo
    .convert({
      transform: {
        type: 'web',
        file: `../design-tokens/${theme}-theme.yml`,
      },
      format: {
        type: 'json',
      },
    })
    .then(json => {
      const themeOutput = {}
      mapKeys(JSON.parse(json), (v, k) => {
        themeOutput[camelCase(k)] = v
      })
      fs.writeFile(
        `./src/tokens/${theme}-tokens.json`,
        `${JSON.stringify(themeOutput, null, '  ')}\n`,
        'utf8',
        error => {
          if (error) throw error
        },
      )
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(`Error: ${error}`)
    })
})
