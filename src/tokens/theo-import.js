const fs = require('fs')
/* eslint-disable import/no-extraneous-dependencies */
const theo = require('theo')
const camelCase = require('lodash.camelcase')
const mapKeys = require('lodash.mapkeys')
/* eslint-enable import/no-extraneous-dependencies */

theo.registerTransform('web', ['color/hex'])
theo
  .convert({
    transform: {
      type: 'web',
      file: './src/tokens/grape-skin.yml',
    },
    format: {
      type: 'json',
    },
  })
  .then(json => {
    const theme = {}
    mapKeys(JSON.parse(json), (v, k) => {
      theme[camelCase(k)] = v
    })
    fs.writeFile(
      './src/tokens/tokens.json',
      JSON.stringify(theme, null, ' '),
      'utf8',
      () => {},
    )
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(`Error: ${error}`)
  })
