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
    resize: ({ allowResize }) => (allowResize ? 'vertical' : 'none'),
    width: '100%',
    backgroundColor: ({ isDisabled, isReadOnly }) => {
      if (isDisabled) return tokens.colorBackgroundFormfieldDisabled
      if (isReadOnly) return tokens.colorBackgroundFormfieldReadonly
      return tokens.colorBackgroundFormcontrolDefault
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
    minHeight: ({ minHeight }) => minHeight,
    maxHeight: ({ maxHeight }) => maxHeight,
    boxSizing: 'border-box',
    padding: `${tokens.paddingFormfieldTextareaInputtextTopbottom} ${tokens.paddingFormfieldInputtextLeftright}`,
    paddingRight: ({ maxLength, component, type }) => {
      if (maxLength && component === 'input')
        return `calc(${tokens.paddingFormfieldInputtextCounter} + 50px)`
      if (type === 'search') {
        return `calc(${tokens.size4X} + ${tokens.sizeHalfX})`
      }
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
    lineHeight: tokens.lineHeightBodySmall,
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
