import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { parseToken } from '../../utils'
import { getColorHover, getColorDefault } from '../../styles/common'
import customScrollbar from '../scrollbar/styles'
import textAreaStyles from './text-area/styles'

export const textAreaHeight = 61
export const counterBoxHeight =
  parseToken(tokens.fontSizeBodyBase) * parseFloat(tokens.lineHeightBodyBase) +
  2 * parseToken(tokens.paddingFormfieldInputtextCounter)

export default createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    padding: [0, theme.outlineWidthFocus],
    width: '100%',
  },
  label: {
    // Reset for Docasaurus
    lineHeight: 1,
  },
  inputWrapper: props => ({
    ...(props.component === 'textarea' &&
      textAreaStyles({
        ...props,
        theme,
      })),
    position: 'relative',
  }),
  customScrollbar: ({ overflowPadding }: { overflowPadding: number }) =>
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
    width: ({ component, width }) => {
      if (width) return width
      return component === 'input' ? '100%' : null
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
      component === 'textarea' ? 'content-box' : 'border-box',
    padding: `${theme.paddingFormfieldTextareaInputtextTopbottom} ${theme.paddingFormfieldInputtextLeftright}`,
    paddingRight: ({ maxLength, component, isDisabled, isReadOnly, type }) => {
      if (
        component === 'input' &&
        type !== 'number' &&
        maxLength > 0 &&
        !isDisabled &&
        !isReadOnly
      )
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
  textInput: {
    '&:hover:not(:focus)': {
      borderColor: getColorHover,
    },
  },
  textArea: {
    '&:hover:not(.focus)': {
      borderColor: getColorHover,
    },
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
  counterWrapper: ({ component }) => {
    const commonStyles = {
      position: 'absolute',
      boxSizing: 'content-box',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'flex-end',
      pointerEvents: 'none',
    }

    let specificStyles

    if (component === 'textarea') {
      specificStyles = {
        backgroundColor: theme.colorBackgroundFormfieldDefault,
        width: `calc(100% - ${
          parseToken(theme.paddingFormfieldInputtextCounter) * 2
        }px)`,
        borderRadius: theme.borderRadiusFormfieldTextarea,
        zIndex: 1,
        left: theme.paddingFormfieldInputtextCounter,
        bottom: 1,
        height: counterBoxHeight,
      }
    }

    if (component === 'input') {
      specificStyles = {
        top: 0,
        bottom: 0,
        right: theme.paddingFormfieldInputtextLeftright,
        alignItems: 'center',
      }
    }

    return {
      ...specificStyles,
      ...commonStyles,
    }
  },
  counter: ({ component }) => {
    if (component === 'textarea') {
      return {
        right: 0,
        bottom: 0,
        padding: theme.paddingFormfieldInputtextCounter,
        position: 'absolut',
      }
    }

    return {
      position: 'relative',
    }
  },
  suffix: {
    marginLeft: theme.sizeHalfX,
  },
}))
