import React from 'react'

import { GenericField, InputProps } from './generic'

export interface TextFieldComponentProps extends InputProps {
  min?: number
  max?: number
}

export interface TextFieldWithLabelProps extends TextFieldComponentProps {
  label: string
}

export interface TextFieldWithoutLabelProps extends TextFieldComponentProps {
  'aria-label': string
}

export type TextFieldProps =
  | TextFieldWithLabelProps
  | TextFieldWithoutLabelProps

export const TextField: React.FC<TextFieldProps> = props => {
  return <GenericField {...props} component="input" />
}

export default TextField
