import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorHover, getColorDefault } from '../../styles/common'
import { parseToken } from '../../utils'

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    width: '100%',
    padding: theme.outlineWidthFocus,
    cursor: 'text',
  },
  inputWrapper: {
    borderRadius: theme.borderRadiusFormfieldTextarea,
    borderWidth: theme.borderWidthFormfield,
    borderStyle: 'solid',
    display: 'flex',
    flexWrap: 'wrap',
    padding: `0 ${parseToken(theme.paddingFormfieldInputtextLeftright) - 4}px`,
    '&:hover:not(.focus)': {
      borderColor: getColorHover,
    },
    '&:not(.focus)': {
      borderColor: getColorDefault,
    },
  },
  scrollbar: {
    minHeight: ({ minHeight }) => minHeight,
    maxHeight: ({ maxHeight }) => maxHeight,
    overflow: 'auto',
  },
  tag: {
    display: 'inline-flex',
    margin: 4,
  },
  input: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizeBodyBase,
    lineHeight: theme.lineHeightBodyBase,
    color: theme.colorTextPrimary,
    border: 'none',
    display: 'inline-block',
    verticalAlign: 'top',
    flex: '1',
    height: 24,
    padding: 4,
    '&:focus': {
      outline: 0,
    },
    '&:placeholder': {
      color: theme.colorTextFormfieldPlaceholder,
    },
  },
  label: {},
  suffix: {
    marginLeft: theme.sizeHalfX,
  },
}))
