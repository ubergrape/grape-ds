import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorFromType, TextColorType } from './helper'

const maxWithDefaultValues = ['none', 'initial']

export const getColorFromProp = ({ color }: { color: TextColorType }): string =>
  getColorFromType(color)

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  headline: ({ maxWidth, size }) => {
    const isMaxWidthNonDefault = !maxWithDefaultValues.includes(maxWidth)

    return {
      fontFamily: theme.fontFamilyHeadline,
      fontWeight: theme.fontWeightHeadline,
      maxWidth,
      whiteSpace: isMaxWidthNonDefault ? 'nowrap' : 'normal',
      overflow: isMaxWidthNonDefault ? 'hidden' : 'visible',
      textOverflow: isMaxWidthNonDefault ? 'ellipsis' : 'clip',
      color: getColorFromProp,
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
  text: ({ maxWidth, emphasis, italic, strike, size }) => {
    const isMaxWidthNonDefault = !maxWithDefaultValues.includes(maxWidth)

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
      color: getColorFromProp,
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
  monospace: ({ maxWidth }) => {
    const isMaxWidthNonDefault = !maxWithDefaultValues.includes(maxWidth)

    return {
      maxWidth,
      whiteSpace: isMaxWidthNonDefault ? 'nowrap' : 'normal',
      overflow: isMaxWidthNonDefault ? 'hidden' : 'visible',
      textOverflow: isMaxWidthNonDefault ? 'ellipsis' : 'clip',
      color: getColorFromProp,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizeBodyBase,
      lineHeight: theme.lineHeightBodyBase,
    }
  },
}))
