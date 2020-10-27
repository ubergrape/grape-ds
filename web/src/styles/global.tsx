import { createUseStyles } from 'react-jss'
import tokens from '../tokens'

const focusStyle = ({ invalid }): string => {
  if (invalid)
    return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusInvalid}`
  return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusDefault}`
}

export const useFocusStyle = createUseStyles({
  onFocus: {
    transition: 'all 0.25s ease-in-out',

    '&:focus': {
      outline: 0,
      boxShadow: focusStyle,
    },
  },
  focus: {
    '&:focus': {
      outline: 0,
    },
    boxShadow: focusStyle,
  },
})
