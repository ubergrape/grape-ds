import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      width: ({ width }) => width,
      height: ({ height }) => height,
      padding: ({ size }) => {
        const tokenSize = size
          .split('-')
          .map((name, key) => {
            if (key === 0) return name
            return capitalize(name)
          })
          .join('')
        return theme[tokenSize]
      },
    },
  }),
)
