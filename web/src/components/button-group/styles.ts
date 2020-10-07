import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      width: ({ width }) => width,
      margin: ({ margin }) => margin,
      flexDirection: ({ align }) => {
        if (align === 'left') return 'row'
        return 'row-reverse'
      },
      '& > button:not(:first-child)': {
        margin: ({ align }) => {
          if (align === 'left') {
            return `0 0 0 ${theme.spaceButtonGroup}`
          }
          return `0 ${theme.spaceButtonGroup} 0 0`
        },
      },
    },
  }),
)
