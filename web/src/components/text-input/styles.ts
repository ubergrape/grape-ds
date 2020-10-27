import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import { getColorDefault, getColorHover } from '../checkbox/styles'

export default createUseStyles((theme: typeof tokens) => ({
  textField: {
    fontFamily: theme.fontFamily,
    borderRadius: theme.borderRadiusFormfieldInput,
    borderWidth: theme.borderWidthFormfield,
    borderStyle: 'solid',
    color: theme.colorTextPrimary,
    //  borderColor: theme.colorBorderFormcontrolOnHover,
    padding: [
      theme.paddingFormfieldTextareaInputtextTopbottom,
      theme.paddingFormfieldInputtextLeftright,
    ],
    '&:placeholder': {
      color: theme.colorTextFormfieldPlaceholder,
    },
    '&:hover': {
      borderColor: getColorHover,
    },
    borderColor: getColorDefault,
  },
  label: {
    color: theme.colorTextFormfieldLabel,
    fontSize: theme.fontSizeBodySmall,
    fontWeight: theme.fontWeightBodyEmphasis,
    marginBottom: 5,
  },
  marginTop: {
    marginTop: 5,
  },
  validationWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  validationMessage: {
    color: theme.colorTextDanger,
  },
}))
