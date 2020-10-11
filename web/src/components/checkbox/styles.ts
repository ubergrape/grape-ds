import { createUseStyles } from 'react-jss'

import { CheckboxProps } from '.'
import tokens from '../../tokens'

const getColorDefault = ({ checked, invalid, disabled }): string => {
  if (disabled) {
    return checked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (invalid) return tokens.colorBorderFormcontrolInvalidDefault
  if (checked) return tokens.colorBorderFormcontrolOnDefault

  return tokens.colorBorderFormcontrolOffDefault
}

const getColorHover = ({ checked, invalid, disabled }): string => {
  if (disabled) {
    return checked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (invalid) return tokens.colorBorderFormcontrolInvalidHover
  if (checked) return tokens.colorBorderFormcontrolOnHover
  return tokens.colorBorderFormcontrolOffHover
}

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  label: {
    display: 'flex',
    alignItems: 'center',
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
    cursor: ({ disabled }) => (disabled ? 'not-allowed' : 'pointer'),
    '&:hover': {
      borderColor: getColorHover,
      color: getColorHover,
    },
    color: getColorDefault,
    borderColor: getColorDefault,
  },
  helpText: {
    marginLeft: '26px',
  },
}))
