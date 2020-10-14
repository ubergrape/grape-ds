import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

const getColorDefault = ({ checked, disabled, indeterminate }): string => {
  if (disabled) {
    return checked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (checked) return tokens.colorBorderFormcontrolOnDefault
  if (!checked && indeterminate) return tokens.colorBorderFormcontrolOnDefault

  return tokens.colorBorderFormcontrolOffDefault
}

const getColorHover = ({ checked, disabled, indeterminate }): string => {
  if (disabled) {
    return checked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (checked || indeterminate) return tokens.colorBorderFormcontrolOnHover

  return tokens.colorBorderFormcontrolOffHover
}

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  spacing: { marginRight: theme.size1X },
  switch: {
    width: theme.size4X,
    height: theme.size2X,
    borderRadius: theme.borderRadiusButton,
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'relative',
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
    marginLeft: '43px',
  },
  dot: {
    width: '10px',
    height: '10px',
    backgroundColor: 'currentColor',
    position: 'absolute',
    top: '3px',
    transition: 'all 0.1s ease-in-out',
    borderRadius: theme.borderRadiusButton,
  },
  dotOff: {
    left: '3px',
  },
  dotOn: {
    left: '19px',
  },
}))
