import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorDefault, getColorHover } from '../checkbox/styles'

export default createUseStyles({
  textField: {
    fontFamily: tokens.fontFamily,
    borderRadius: ({ type }) =>
      type === 'input'
        ? tokens.borderRadiusFormfieldInput
        : tokens.borderRadiusFormfieldTextarea,
    borderWidth: tokens.borderWidthFormfield,
    borderStyle: 'solid',
    color: tokens.colorTextPrimary,
    padding: props => {
      // if (props.maxLength)
      //   return `${tokens.paddingFormfieldTextareaInputtextTopbottom} calc(${tokens.paddingFormfieldInputtextCounter})`
      return `${tokens.paddingFormfieldTextareaInputtextTopbottom} ${tokens.paddingFormfieldInputtextLeftright}`
    },
    paddingRight: ({ maxLength }) => {
      if (maxLength)
        return `calc(${tokens.paddingFormfieldInputtextCounter} + 50px)`

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
      component === 'textarea' ? tokens.paddingFormfieldInputtextLeftright : 0,
  },
  suffix: {
    marginLeft: tokens.sizeHalfX,
  },
})
