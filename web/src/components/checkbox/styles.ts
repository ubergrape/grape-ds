import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

type InputProps = {
  isChecked?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isIndeterminate?: boolean
}

export const getColorDefault = ({
  isChecked,
  isInvalid,
  isDisabled,
  isReadOnly,
  isIndeterminate,
}: InputProps): string => {
  if (isDisabled) {
    return isChecked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (isReadOnly) return tokens.colorBorderFormfieldReadonly
  if (isInvalid) return tokens.colorBorderFormcontrolInvalidDefault
  if (isChecked) return tokens.colorBorderFormcontrolOnDefault
  if (!isChecked && isIndeterminate)
    return tokens.colorBorderFormcontrolOnDefault

  return tokens.colorBorderFormcontrolOffDefault
}

export const getColorHover = ({
  isChecked,
  isInvalid,
  isDisabled,
  isIndeterminate,
}: InputProps): string => {
  if (isDisabled) {
    return isChecked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (isInvalid) return tokens.colorBorderFormcontrolInvalidHover
  if (isChecked || isIndeterminate) return tokens.colorBorderFormcontrolOnHover

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
    cursor: ({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer'),
    '&:hover': {
      borderColor: getColorHover,
      color: getColorHover,
    },
    color: getColorDefault,
    borderColor: getColorDefault,
  },
}))
