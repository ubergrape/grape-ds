import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

const getColorDefault = ({
  checked,
  invalid,
  disabled,
  indeterminate,
}): string => {
  if (disabled) {
    return checked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (invalid) return tokens.colorBorderFormcontrolInvalidDefault
  if (checked) return tokens.colorBorderFormcontrolOnDefault
  if (!checked && indeterminate) return tokens.colorBorderFormcontrolOnDefault

  return tokens.colorBorderFormcontrolOffDefault
}

const getColorHover = ({
  checked,
  invalid,
  disabled,
  indeterminate,
}): string => {
  if (disabled) {
    return checked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (invalid) return tokens.colorBorderFormcontrolInvalidHover
  if (checked || indeterminate) return tokens.colorBorderFormcontrolOnHover

  return tokens.colorBorderFormcontrolOffHover
}

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  spacing: { marginRight: theme.size1X },
  checkbox: {
    width: theme.size2X,
    height: theme.size2X,
    borderRadius: theme.borderRadiusCheckbox,
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
}))
