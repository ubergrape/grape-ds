import { JssStyle } from 'jss'

import constants from '../constants'

const getFontFace = ({
  family,
  style,
  fontStyle = 'normal',
  display = 'swap',
  weight = 400,
  formats = ['woff2', 'woff', 'ttf'],
}: {
  family: string
  style: string
  fontStyle?: string
  display?: string
  weight?: number
  formats?: Array<string>
}): JssStyle => {
  const concatenatedFamilyName = family.replace(/ /g, '')
  return {
    fontFamily: `${family}`,
    fontStyle,
    fontWeight: weight,
    fontDisplay: display,
    src: formats.map(
      format =>
        `local('${family} ${style}'), ` +
        `local('${concatenatedFamilyName}-${style}'), ` +
        `url('${constants.staticPath}/src/fonts/${concatenatedFamilyName}/${style}.${format}') ` +
        `format('${format}')`,
    ),
  }
}

const fonts: Record<string, any> = {
  '@global': {
    '@font-face': [
      getFontFace({ family: 'Noto Mono', style: 'Regular' }),
      getFontFace({ family: 'Noto Sans', style: 'Regular' }),
      getFontFace({
        family: 'Noto Sans',
        weight: 600,
        style: 'SemiBold',
      }),
    ],
  },
}

export default fonts
