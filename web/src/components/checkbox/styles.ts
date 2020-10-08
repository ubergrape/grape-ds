import { createUseStyles } from 'react-jss'

import { CheckboxProps } from '.'
import tokens from '../../tokens'

const getColorDefault = ({ checked, invalid }): string => {
  if (invalid) return tokens.colorBorderFormcontrolInvalidDefault
  if (checked) return tokens.colorBorderFormcontrolOnDefault
  return tokens.colorBorderFormcontrolOffDefault
}

const getColorHover = ({ checked, invalid }): string => {
  if (invalid) return tokens.colorBorderFormcontrolInvalidHover
  if (checked) return tokens.colorBorderFormcontrolOnHover
  return tokens.colorBorderFormcontrolOffHover
}

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  label: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.fontFamilyLabel,
    fontSize: theme.fontSizeLabel,
  },
  checkbox: {
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      borderColor: getColorHover,
      color: getColorHover,
    },
    color: getColorDefault,
    borderColor: getColorDefault,
  },
}))
