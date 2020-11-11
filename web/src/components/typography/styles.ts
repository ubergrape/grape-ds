import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorFromType } from './helper'
import { TextProps } from './text'

const maxWithDefaultValues = ['none', 'initial']

const getColorFromProp = ({ color }) =>
  getColorFromType(color) || tokens.colorTextPrimary

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

    return {
      color: getColorFromProp,
      maxWidth,
      whiteSpace: isMaxWidthNonDefault ? 'nowrap' : 'normal',
      overflow: isMaxWidthNonDefault ? 'hidden' : 'visible',
      textOverflow: isMaxWidthNonDefault ? 'ellipsis' : 'clip',
      fontFamily: () => {
        return theme.fontFamilyBody
      },
      lineHeight: () => {
        switch (size) {
          case 'base':
            return theme.lineHeightBodyBase
          case 'large':
            return theme.lineHeightBodyLarge
          case 'small':
            return theme.lineHeightBodySmall
          default:
            return theme.lineHeightBodySmall
        }
      },
      fontSize: () => {
        switch (size) {
          case 'base':
            return theme.fontSizeBodyBase
          case 'large':
            return theme.fontSizeBodyLarge
          case 'small':
            return theme.fontSizeBodySmall
          default:
            return theme.fontSizeBodyBase
        }
      },
      fontWeight: emphasis
        ? theme.fontWeightBodyEmphasis
        : theme.fontWeightBodyRegular,
      fontStyle: italic ? 'italic' : 'normal',
      textDecoration: strike ? 'line-through' : 'none',
    }
  },
  monospace: {
    color: getColorFromProp,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizeBodyBase,
    lineHeight: theme.lineHeightBodyBase,
  },
}))
