import { createUseStyles } from 'react-jss'
import tokens from '../tokens'

export const useFocusStyle = createUseStyles({
  focus: {
    boxShadow: ({ invalid }): string => {
      if (invalid)
        return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusInvalid}`
      return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusDefault}`
    },
  },
})
