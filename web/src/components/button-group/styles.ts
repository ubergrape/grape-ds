import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: ({ inline }) => (inline ? 'inline-flex' : 'flex'),
      verticalAlign: 'top', // https://stackoverflow.com/a/37753656
      width: ({ width }) => width,
      margin: ({ margin }) => margin,
      flexDirection: ({ align, vertical, verticalAlign }) => {
        if (vertical) {
          if (verticalAlign === 'top') return 'column'
          return 'column-reverse'
        }

        if (align === 'left') return 'row'
        return 'row-reverse'
      },
      '& > button:not(:first-child)': {
        margin: ({ align, vertical, verticalAlign }) => {
          if (vertical) {
            if (verticalAlign === 'top') {
              return `${theme.spaceButtonGroup} 0 0 0`
            }

            return `0 0 ${theme.spaceButtonGroup} 0`
          }

          if (align === 'left') {
            return `0 0 0 ${theme.spaceButtonGroup}`
          }
          return `0 ${theme.spaceButtonGroup} 0 0`
        },
      },
    },
  }),
)
