import { createUseStyles } from 'react-jss'
import tokens from '../tokens'

type FocusStyleProps = {
  isInvalid?: boolean
  isDisabled?: boolean
}

export const focusStyle = ({
  isInvalid,
  isDisabled,
}: FocusStyleProps): string => {
  if (isDisabled) return undefined
  if (isInvalid)
    return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusInvalid}`
  return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusDefault}`
}

type InputColorProps = {
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
}: InputColorProps): string => {
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
}: InputColorProps): string => {
  if (isDisabled) {
    return isChecked
      ? tokens.colorBorderFormcontrolOnDisabled
      : tokens.colorBorderFormcontrolOffDisabled
  }
  if (isInvalid) return tokens.colorBorderFormcontrolInvalidHover
  if (isChecked || isIndeterminate) return tokens.colorBorderFormcontrolOnHover

  return tokens.colorBorderFormcontrolOffHover
}

export const useFocusStyle = createUseStyles({
  onFocus: {
    transition: 'box-shadow, border-color 0.25s ease-in-out',
    '&:focus, & > .focus': {
      outline: 0,
      // https://stackoverflow.com/a/31355694
      '-webkit-transform': 'translate3d(0,0,0)',
      boxShadow: focusStyle,
      borderColor: ({ isInvalid }) =>
        isInvalid
          ? tokens.colorBorderFormfieldInvalidDefault
          : tokens.colorBorderFormfieldFocus,
    },
    '& > .focus': {
      backgroundColor: ({ isReadOnly }) =>
        isReadOnly
          ? tokens.colorBackgroundFormfieldReadonly
          : tokens.colorBackgroundFormfieldDefault,
    },
  },
  onFocusVisible: {
    '&:focus': {
      outline: 0,
    },
    '&:focus-visible': {
      outline: 0,
      '-webkit-transform': 'translate3d(0,0,0)',
      boxShadow: focusStyle,
      borderColor: ({ isInvalid }) =>
        isInvalid
          ? tokens.colorBorderFormfieldInvalidDefault
          : tokens.colorBorderFormfieldFocus,
    },
  },
  focusWithBorder: {
    '&:focus': {
      outline: 0,
    },
    '-webkit-transform': 'translate3d(0,0,0)',
    boxShadow: focusStyle,
    borderColor: tokens.colorBorderFormfieldFocus,
  },
  focus: {
    '&:focus': {
      outline: 0,
    },
    '-webkit-transform': 'translate3d(0,0,0)',
    boxShadow: focusStyle,
  },
})
