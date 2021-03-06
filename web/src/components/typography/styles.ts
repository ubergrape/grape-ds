import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorFromType, TextColorType } from './helper'

const maxWidthDefaultValues = ['none', 'initial']

export const getColorFromProp = ({ color }: { color: TextColorType }): string =>
  getColorFromType(color)

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  headline: ({ maxWidth, color: colorName, size }) => {
    const isMaxWidthNonDefault = !maxWidthDefaultValues.includes(maxWidth)

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
    const isMaxWidthNonDefault = !maxWidthDefaultValues.includes(maxWidth)

    const color = getColorFromType(colorName)

    let fontSize = theme.fontSizeBodyBase
    let lineHeight = theme.lineHeightBodySmall

    switch (size) {
      case 'base':
        fontSize = theme.fontSizeBodyBase
        lineHeight = theme.lineHeightBodyBase

        break
      case 'large':
        fontSize = theme.fontSizeBodyLarge
        lineHeight = theme.lineHeightBodyLarge

        break
      case 'small':
        fontSize = theme.fontSizeBodySmall
        lineHeight = theme.lineHeightBodySmall

        break
      default:
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
    const isMaxWidthNonDefault = !maxWidthDefaultValues.includes(maxWidth)

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
