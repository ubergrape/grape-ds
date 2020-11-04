import React from 'react'

import { GenericField, InputProps } from './generic'

export const TextArea: React.FC<InputProps & { rows?: number }> = props => {
  return <GenericField {...props} component="textarea" />
}

TextArea.defaultProps = {}

export default TextArea
