import React from 'react'

import { GenericField, InputComponentProps } from '../generic'

export interface TextAreaComponentProps extends InputComponentProps {
  component: 'textarea'
  rows?: number
  minHeight?: number
  maxHeight?: number
  allowResize?: boolean
  autoExpand?: boolean
}

export interface TextAreaWithLabelProps extends TextAreaComponentProps {
  label: string
}

export interface TextAreaWithoutLabelProps extends TextAreaComponentProps {
  'aria-label': string
}

export type TextAreaProps = TextAreaWithLabelProps | TextAreaWithoutLabelProps

export const TextArea: React.FC<TextAreaProps> = props => {
  return <GenericField {...props} component="textarea" />
}

export default TextArea
