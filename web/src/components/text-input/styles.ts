import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { parseToken } from '../../utils'
import { getColorDefault } from '../checkbox/styles'
import customScrollbar from '../scrollbar/styles'

const textAreaHeight = 61
const counterBoxHeight =
  parseToken(tokens.fontSizeBodyBase) * parseFloat(tokens.lineHeightBodyBase) +
  2 * parseToken(tokens.paddingFormfieldInputtextCounter)

export default createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    width: ({ width }) => {
      if (width) return width
      return '100%'
    },
  },
  label: {
    // Reset for Docasaurus
    lineHeight: 1,
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
          if (maxLength) {
            return [[minHeight + counterBoxHeight + 2], '!important']
          }
          return [[minHeight + 2], '!important']
        }
        if (maxLength) {
          return [[textAreaHeight + counterBoxHeight + 2], '!important']
        }
        if (minHeight < textAreaHeight) {
          return [[textAreaHeight + 2], '!important']
        }
        return [[textAreaHeight + 2], '!important']
      },
      paddingBottom: ({ maxLength }) =>
        maxLength ? counterBoxHeight + 2 : null,
      maxHeight: ({ maxHeight }) => maxHeight,
      '& .os-scrollbar-corner': {
        position: 'absolute',
      },
      '& .os-scrollbar': {
        paddingBottom: ({ maxLength, allowResize }) => {
          if (maxLength) {
            // -10 to align scrollbar block on same level where text ends
            if (allowResize) {
              return [[`${counterBoxHeight - 10 + 2}px`], '!important']
            }
            return [[`${counterBoxHeight + 2}px`], '!important']
          }
          return [[theme.sizeHalfX], '!important']
        },
      },
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
  validationIcon: {
    flex: '0 0 auto',
  },
  validationMessage: {
    color: theme.colorTextDanger,
  },
  counterWrapper: {
    position: 'absolute',
    boxSizing: 'content-box',
    backgroundColor: ({ component }) =>
      component === 'textarea' ? theme.colorBackgroundFormfieldDefault : null,
    width: ({ component }) => {
      return component === 'textarea'
        ? `calc(100% - ${
            parseToken(theme.paddingFormfieldInputtextCounter) * 2
          }px)`
        : null
    },
    borderRadius: ({ component }) => {
      return component === 'textarea'
        ? theme.borderRadiusFormfieldTextarea
        : null
    },
    zIndex: ({ component }) => (component === 'textarea' ? 1 : null),
    left: ({ component }) =>
      component === 'textarea' ? theme.paddingFormfieldInputtextCounter : null,
    top: ({ component }) => (component === 'input' ? 0 : null),
    bottom: ({ component }) => (component === 'textarea' ? 1 : 0),
    right: ({ component }) =>
      component === 'input' ? theme.paddingFormfieldInputtextLeftright : null,
    height: ({ component }) =>
      component === 'textarea' ? counterBoxHeight : null,
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: ({ component }) => (component === 'input' ? 'center' : null),
    pointerEvents: 'none',
  },
  counter: {
    right: ({ component }) => (component === 'textarea' ? 0 : null),
    bottom: ({ component }) => (component === 'textarea' ? 0 : null),
    padding: ({ component }) =>
      component === 'textarea'
        ? theme.paddingFormfieldInputtextCounter
        : [0, theme.paddingFormfieldInputtextCounter],
    position: ({ component }) =>
      component === 'input' ? 'relative' : 'absolut',
  },
  suffix: {
    marginLeft: theme.sizeHalfX,
  },
}))
