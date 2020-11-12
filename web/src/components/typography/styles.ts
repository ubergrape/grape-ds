import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorFromType, TextColorType } from './helper'

const maxWithDefaultValues = ['none', 'initial']

export const getColorFromProp = ({ color }: { color: TextColorType }): string =>
  getColorFromType(color)

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  headline: ({ maxWidth, color: colorName, size }) => {
    const isMaxWidthNonDefault = !maxWithDefaultValues.includes(maxWidth)

    const color = getColorFromType(colorName)

    return {
      fontFamily: theme.fontFamilyHeadline,
      fontWeight: theme.fontWeightHeadline,
      maxWidth,
      whiteSpace: isMaxWidthNonDefault ? 'nowrap' : 'normal',
      overflow: isMaxWidthNonDefault ? 'hidden' : 'visible',
      textOverflow: isMaxWidthNonDefault ? 'ellipsis' : 'clip',
      color,
      lineHeight:
        size === 'page'
          ? theme.lineHeightHeadlinePage
          : theme.lineHeightHeadlineBase,
      fontSize:
        size === 'page'
          ? theme.fontSizeHeadlinePage
          : theme.fontSizeHeadlineBase,
    }
  },
  text: ({ maxWidth, color: colorName, emphasis, italic, strike, size }) => {
    const isMaxWidthNonDefault = !maxWithDefaultValues.includes(maxWidth)

    const color = getColorFromType(colorName)

    let fontSize = theme.fontSizeBodyBase
    switch (size) {
      case 'base':
        fontSize = theme.fontSizeBodyBase
        break
      case 'large':
        fontSize = theme.fontSizeBodyLarge
        break
      case 'small':
        fontSize = theme.fontSizeBodySmall
        break
      default:
        fontSize = theme.fontSizeBodyBase
        break
    }

    let lineHeight = theme.lineHeightBodySmall
    switch (size) {
      case 'base':
        lineHeight = theme.lineHeightBodyBase
        break
      case 'large':
        lineHeight = theme.lineHeightBodyLarge
        break
      case 'small':
        lineHeight = theme.lineHeightBodySmall
        break
      default:
        lineHeight = theme.lineHeightBodySmall
        break
    }

    return {
      color,
      maxWidth,
      whiteSpace: isMaxWidthNonDefault ? 'nowrap' : 'normal',
      overflow: isMaxWidthNonDefault ? 'hidden' : 'visible',
      textOverflow: isMaxWidthNonDefault ? 'ellipsis' : 'clip',
      fontFamily: theme.fontFamilyBody,
      lineHeight,
      fontSize,
      fontWeight: emphasis
        ? theme.fontWeightBodyEmphasis
        : theme.fontWeightBodyRegular,
      fontStyle: italic ? 'italic' : 'normal',
      textDecoration: strike ? 'line-through' : 'none',
    }
  },
  monospace: ({ maxWidth, color: colorName }) => {
    const isMaxWidthNonDefault = !maxWithDefaultValues.includes(maxWidth)

    const color = getColorFromType(colorName)

    return {
      maxWidth,
      whiteSpace: isMaxWidthNonDefault ? 'nowrap' : 'normal',
      overflow: isMaxWidthNonDefault ? 'hidden' : 'visible',
      textOverflow: isMaxWidthNonDefault ? 'ellipsis' : 'clip',
      color,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizeBodyBase,
      lineHeight: theme.lineHeightBodyBase,
    }
  },
}))
