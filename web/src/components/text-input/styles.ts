import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorDefault, getColorHover } from '../checkbox/styles'

export default createUseStyles({
  textField: {
    fontFamily: tokens.fontFamily,
    borderRadius: ({ component }) => {
      return component === 'input'
        ? tokens.borderRadiusFormfieldInput
        : tokens.borderRadiusFormfieldTextarea
    },
    borderWidth: tokens.borderWidthFormfield,
    borderStyle: 'solid',
    color: tokens.colorTextPrimary,
    resize: 'none',
    backgroundColor: ({ isDisabled, isReadOnly }) => {
      if (isDisabled) return tokens.colorBackgroundSecondary
      if (isReadOnly) return tokens.colorBackgroundFormfieldReadonly
      return undefined
    },
    cursor: ({ isDisabled }) => {
      if (isDisabled) return 'not-allowed'
      return undefined
    },
    height: ({ component, maxLength }) => {
      if (component === 'input') return tokens.sizeFormfieldInput
      if (maxLength) {
        return '92px'
      }
      return '60px'
    },
    boxSizing: 'border-box',
    padding: () => {
      return `${tokens.paddingFormfieldTextareaInputtextTopbottom} ${tokens.paddingFormfieldInputtextLeftright}`
    },
    paddingRight: ({ maxLength, component }) => {
      if (maxLength && component === 'input')
        return `calc(${tokens.paddingFormfieldInputtextCounter} + 50px)`

      return null
    },
    paddingLeft: ({ renderLeft }) => {
      if (renderLeft) return `calc(${tokens.size4X} + ${tokens.sizeHalfX})`
      return null
    },
    '&:placeholder': {
      color: tokens.colorTextFormfieldPlaceholder,
    },
    '&:hover:not(:focus)': {
      borderColor: getColorHover,
    },
    borderColor: getColorDefault,
  },
  label: {
    color: tokens.colorTextFormfieldLabel,
    fontSize: tokens.fontSizeBodySmall,
    fontWeight: tokens.fontWeightBodyEmphasis,
  },
  validationWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  validationMessage: {
    color: tokens.colorTextDanger,
  },
  counter: {
    position: 'absolute',
    right: 0,
    width: 32,
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    paddingRight: tokens.paddingFormfieldInputtextLeftright,
    justifyContent: 'flex-end',
    pointerEvents: 'none',
    top: ({ component }) => (component === 'textarea' ? undefined : 0),
    bottom: ({ component }) =>
      component === 'textarea' ? tokens.size1HalfX : 0,
  },
  suffix: {
    marginLeft: tokens.sizeHalfX,
  },
  inputWrapper: {
    position: 'relative',
  },
})
