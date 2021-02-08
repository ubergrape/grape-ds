import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorDefault } from '../checkbox/styles'
import customScrollbar from '../scrollbar/styles'
import { parseToken } from '../../utils'

export default createUseStyles({
  customScrollbar: ({ overflowPadding }) => customScrollbar(overflowPadding),
  textField: {
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fontSizeBodyBase,
    lineHeight: tokens.lineHeightBodyBase,
    borderRadius: ({ component }) => {
      return component === 'input'
        ? tokens.borderRadiusFormfieldInput
        : tokens.borderRadiusFormfieldTextarea
    },
    borderWidth: tokens.borderWidthFormfield,
    borderStyle: 'solid',
    color: tokens.colorTextPrimary,
    width: ({ component }) => (component === 'input' ? '100%' : null),
    backgroundColor: ({ isDisabled, isReadOnly }) => {
      if (isDisabled) return tokens.colorBackgroundFormfieldDisabled
      if (isReadOnly) return tokens.colorBackgroundFormfieldReadonly
      return tokens.colorBackgroundFormcontrolDefault
    },
    cursor: ({ isDisabled }) => {
      if (isDisabled) return 'not-allowed'
      return undefined
    },
    height: ({
      height,
      component,
      maxLength,
      rows,
      maxHeight,
      minHeight,
      autoExpand,
    }) => {
      if (component === 'input') return tokens.sizeFormfieldInput
      if (maxLength && !autoExpand) {
        return '92px'
      }
      if (rows || maxHeight || minHeight || autoExpand) return 'auto'
      if (height) return height
      return 44
    },
    minHeight: ({ component, minHeight }) => {
      if (component === 'textarea' && (!minHeight || minHeight < 44)) return 44
      return minHeight
    },
    maxHeight: ({ maxHeight }) => maxHeight,
    boxSizing: ({ component }) =>
      component === 'input' ? 'border-box' : 'content-box',
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
    borderColor: getColorDefault,
  },
  label: {
    color: tokens.colorTextFormfieldLabel,
    fontFamily: tokens.fontFamily,
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
    boxSizing: 'content-box',
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
    '& > .os-host-textarea:not(.focus)': {
      borderColor: getColorDefault,
      backgroundColor: ({ isDisabled, isReadOnly }) => {
        if (isDisabled) return tokens.colorBackgroundFormfieldDisabled
        if (isReadOnly) return tokens.colorBackgroundFormfieldReadonly
        return tokens.colorBackgroundFormcontrolDefault
      },
    },
  },
})
