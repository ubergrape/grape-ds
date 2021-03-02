import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorHover, getColorDefault } from '../../styles/common'

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  spacing: { marginRight: theme.size1X },
  checkbox: {
    boxSizing: 'content-box',
    width: theme.size2X,
    height: theme.size2X,
    borderRadius: theme.borderRadiusCheckbox,
    borderWidth: '1px',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: ({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer'),
    '&:hover': {
      borderColor: getColorHover,
      color: getColorHover,
    },
    color: getColorDefault,
    borderColor: getColorDefault,
  },
}))
