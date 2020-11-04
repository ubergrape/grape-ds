import { createUseStyles } from 'react-jss'

import { scale } from '../../styles/scale'

export default createUseStyles(() => ({
  wrapper: {
    width: ({ width }) => width,
    height: ({ height }) => height,
    padding: ({ size }) => {
      return scale[size]
    },
  },
}))
