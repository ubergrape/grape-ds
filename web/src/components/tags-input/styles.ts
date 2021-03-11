import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'

import { parseToken } from '../../utils'

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  wrapper: {
    width: ({ width }) => {
      if (width) return width
      return '100%'
    },
    padding: theme.outlineWidthFocus,
  },
  inputWrapper: {
    borderRadius: theme.borderRadiusFormfieldTextarea,
    borderWidth: theme.borderWidthFormfield,
    borderStyle: 'solid',
    display: 'flex',
    flexWrap: 'wrap',
    padding: `${theme.paddingFormfieldTextareaInputtextTopbottom}
      ${parseToken(theme.paddingFormfieldInputtextLeftright) - 4}px`,
  },
  tag: {
    display: 'inline-block',
    margin: 4,
  },
  input: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizeBodyBase,
    lineHeight: theme.lineHeightBodyBase,
    color: theme.colorTextPrimary,
    border: 'none',
    display: 'inline-block',
    flex: '1',
    padding: 4,
    '&:focus': {
      outline: 0,
    },
  },
  label: {},
  suffix: {
    marginLeft: theme.sizeHalfX,
  },
}))
