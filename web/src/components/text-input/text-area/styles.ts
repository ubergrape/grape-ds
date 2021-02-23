import { JssStyle } from 'jss'

import tokens from '../../../tokens'
import { getColorDefault, getColorHover } from '../../checkbox/styles'
import { textAreaHeight, counterBoxHeight } from '../styles'
import { TextAreaComponentProps } from '.'

interface TextAreaComponentStyles extends TextAreaComponentProps {
  theme: typeof tokens
}

export default ({
  isDisabled,
  isReadOnly,
  maxLength,
  maxHeight,
  minHeight,
  allowResize,
  theme,
}: TextAreaComponentStyles): Record<string, JssStyle | string> => ({
  '& > .os-host-textarea:not(.focus)': {
    '&:hover': {
      borderColor: getColorHover,
    },
    borderColor: getColorDefault,
    backgroundColor: () => {
      if (isDisabled) return theme.colorBackgroundFormfieldDisabled
      if (isReadOnly) return theme.colorBackgroundFormfieldReadonly
      return theme.colorBackgroundFormfieldDefault
    },
  },
  '& > .os-host-textarea': {
    boxSizing: 'border-box',
    // Adding + 2 to cover borders because of border-box sizing
    minHeight: () => {
      if (minHeight) {
        if (maxLength) {
          return [[minHeight + counterBoxHeight + 2], '!important']
        }
        return [[minHeight + 2], '!important']
      }
      if (maxLength) {
        return [[textAreaHeight + counterBoxHeight + 2], '!important']
      }
      if (minHeight < textAreaHeight) {
        return [[textAreaHeight + 2], '!important']
      }
      return [[textAreaHeight + 2], '!important']
    },
    paddingBottom: () => (maxLength ? counterBoxHeight + 2 : null),
    maxHeight: () => maxHeight,
    '& .os-scrollbar-corner': {
      position: 'absolute',
    },
    '& .os-scrollbar': {
      '&:hover': {
        cursor: 'default',
      },
      paddingBottom: () => {
        if (maxLength) {
          // -10 to align scrollbar block on same level where text ends
          if (allowResize) {
            return [[`${counterBoxHeight - 10 + 2}px`], '!important']
          }
          return [[`${counterBoxHeight + 2}px`], '!important']
        }
        return [[theme.sizeHalfX], '!important']
      },
    },
  },
})
