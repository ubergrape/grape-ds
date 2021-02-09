import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorDefault } from '../checkbox/styles'
import customScrollbar from '../scrollbar/styles'

const textAreaHeight = 61

export default createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    width: ({ width }) => {
      if (width) return width
      return '100%'
    },
  },
  inputWrapper: {
    position: 'relative',
    '& > .os-host-textarea:not(.focus)': {
      borderColor: getColorDefault,
      backgroundColor: ({ isDisabled, isReadOnly }) => {
        if (isDisabled) return theme.colorBackgroundFormfieldDisabled
        if (isReadOnly) return theme.colorBackgroundFormfieldReadonly
        return theme.colorBackgroundFormfieldDefault
      },
    },
    '& > .os-host-textarea': {
      boxSizing: 'border-box',
      // Adding + 2 to cover borders because of border-box sizing
      minHeight: ({ minHeight, maxLength }) => {
        if (minHeight) {
          if (maxLength) return [[minHeight + 42], '!important']
          return [[minHeight + 2], '!important']
        }
        if (maxLength) return [[textAreaHeight + 42], '!important']
        if (minHeight < textAreaHeight) {
          return [[textAreaHeight + 2], '!important']
        }
        return [[textAreaHeight + 2], '!important']
      },
      paddingBottom: ({ maxLength }) => (maxLength ? 42 : null),
      maxHeight: ({ maxHeight }) => maxHeight,
    },
    '& .os-scrollbar': {
      paddingBottom: ({ maxLength }) => [
        maxLength ? '42px' : '4px',
        '!important',
      ],
    },
  },
  customScrollbar: ({ overflowPadding }: { overflowPadding: string }) =>
    customScrollbar({ overflowPadding, theme }),
  textField: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizeBodyBase,
    lineHeight: theme.lineHeightBodyBase,
    borderRadius: ({ component }) => {
      return component === 'input'
        ? theme.borderRadiusFormfieldInput
        : theme.borderRadiusFormfieldTextarea
    },
    borderWidth: theme.borderWidthFormfield,
    borderStyle: 'solid',
    color: theme.colorTextPrimary,
    width: ({ component, inputWidth }) => {
      if (inputWidth) return inputWidth
      if (component === 'input') return '100%'
      return null
    },
    backgroundColor: ({ isDisabled, isReadOnly }) => {
      if (isDisabled) return theme.colorBackgroundFormfieldDisabled
      if (isReadOnly) return theme.colorBackgroundFormfieldReadonly
      return theme.colorBackgroundFormfieldDefault
    },
    cursor: ({ isDisabled }) => {
      if (isDisabled) return 'not-allowed'
      return undefined
    },
    height: ({ height, component, rows, maxHeight, minHeight, autoExpand }) => {
      if (height) return height
      if (component === 'input') return theme.sizeFormfieldInput
      if (rows || maxHeight || minHeight || autoExpand) return 'auto'
      return textAreaHeight
    },
    minHeight: ({ component, minHeight }) => {
      if (
        component === 'textarea' &&
        (!minHeight || minHeight < textAreaHeight)
      ) {
        return textAreaHeight
      }
      return minHeight
    },
    boxSizing: ({ component }) =>
      component === 'input' ? 'border-box' : 'content-box',
    padding: `${theme.paddingFormfieldTextareaInputtextTopbottom} ${theme.paddingFormfieldInputtextLeftright}`,
    paddingRight: ({ maxLength, component, type }) => {
      if (maxLength && component === 'input')
        return `calc(${theme.paddingFormfieldInputtextCounter} + 50px)`
      if (type === 'search') {
        return `calc(${theme.size4X} + ${theme.sizeHalfX})`
      }
      return null
    },
    paddingLeft: ({ renderLeft }) => {
      if (renderLeft) return `calc(${theme.size4X} + ${theme.sizeHalfX})`
      return null
    },
    '&:placeholder': {
      color: theme.colorTextFormfieldPlaceholder,
    },
    borderColor: getColorDefault,
  },
  validationWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  validationMessage: {
    color: theme.colorTextDanger,
  },
  counterWrapper: {
    position: 'absolute',
    boxSizing: 'content-box',
    backgroundColor: 'white',
    width: 'calc(100% - 16px)',
    borderRadius: 16,
    zIndex: 1,
    left: 8,
    height: 40,
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
    pointerEvents: 'none',
    top: ({ component }) => (component === 'textarea' ? undefined : 0),
    bottom: ({ component }) => (component === 'textarea' ? 1 : 0),
  },
  counter: {
    right: theme.paddingFormfieldTextareaInputtextTopbottom,
    bottom: theme.paddingFormfieldTextareaInputtextTopbottom,
    position: 'absolute',
  },
  suffix: {
    marginLeft: theme.sizeHalfX,
  },
}))
