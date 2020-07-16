import constants from '../constants'

export default {
  '@font-face': {
    'font-family': 'Noto Sans',
    'font-style': 'normal',
    'font-weight': 400,
    'font-display': 'swap',
    src: `local('Noto Sans'), local('NotoSans'), url('${constants.staticPath}/src/fonts/NotoSans/NotoSans-Regular.woff2') format('woff2')`,
  },
}
