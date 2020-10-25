import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorFromType } from './helper'
import { TextProps } from './text'

const getColorFromProp = ({ color }) =>
  getColorFromType(color) || tokens.colorTextPrimary

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  headline: {
    fontFamily: theme.fontFamilyHeadline,
    fontWeight: theme.fontWeightHeadline,
    color: getColorFromProp,
    lineHeight: ({ size }) => {
      return size === 'page'
        ? theme.lineHeightHeadlinePage
        : theme.lineHeightHeadlineBase
    },
    fontSize: ({ size }) => {
      return size === 'page'
        ? theme.fontSizeHeadlinePage
        : theme.fontSizeHeadlineBase
    },
  },
  text: {
    color: getColorFromProp,
    fontFamily: ({ size }: TextProps) => {
      switch (size) {
        case 'body-base':
          return theme.fontFamilyBody
        case 'body-large':
          return theme.fontFamilyBody
        case 'body-small':
          return theme.fontFamilyBody
        default:
          return theme.fontFamily
      }
    },
    lineHeight: ({ size }: TextProps) => {
      switch (size) {
        case 'body-base':
          return theme.lineHeightBodyBase
        case 'body-large':
          return theme.lineHeightBodyLarge
        case 'body-small':
          return theme.lineHeightBodySmall
        default:
          return theme.lineHeightBodySmall
      }
    },
    fontSize: ({ size }: TextProps) => {
      switch (size) {
        case 'body-base':
          return theme.fontSizeBodyBase
        case 'body-large':
          return theme.fontSizeBodyLarge
        case 'body-small':
          return theme.fontSizeBodySmall
        default:
          return theme.fontSizeBodyBase
      }
    },
    fontWeight: ({ emphasis }: TextProps) => {
      return emphasis
        ? theme.fontWeightBodyEmphasis
        : theme.fontWeightBodyRegular
    },
    fontStyle: ({ italic }: TextProps) => {
      return italic ? 'italic' : 'normal'
    },
    textDecoration: ({ strike }: TextProps) => {
      return strike ? 'line-through' : 'none'
    },
  },
  monospace: {
    color: getColorFromProp,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizeBodyBase,
    lineHeight: theme.lineHeightBodyBase,
  },
}))
