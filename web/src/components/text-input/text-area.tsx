import React from 'react'

import { GenericField, InputProps } from './generic'

export const TextArea: React.FC<
  InputProps & {
    rows?: number
    minHeight?: number
    maxHeight?: number
    allowResize?: boolean
  }
> = props => {
  return <GenericField {...props} component="textarea" />
}

TextArea.defaultProps = {}

export default TextArea
