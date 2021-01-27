import React from 'react'

import { GenericField, InputProps } from './generic'

export interface TextFieldWithLabelProps extends InputProps {
  label: string
}

export interface TextFieldWithoutLabelProps extends InputProps {
  'aria-label': string
}

export type TextFieldProps =
  | TextFieldWithLabelProps
  | TextFieldWithoutLabelProps

export const TextField: React.FC<TextFieldProps> = props => {
  return <GenericField {...props} component="input" />
}

export default TextField
