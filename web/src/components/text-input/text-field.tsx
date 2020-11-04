import React from 'react'

import { GenericField, InputProps } from './generic'

export const TextField: React.FC<InputProps> = props => {
  return <GenericField {...props} component="input" />
}

TextField.defaultProps = {}

export default TextField
