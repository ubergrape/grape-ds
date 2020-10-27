/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import clsx from 'clsx'
import { useTheme } from 'react-jss'

import { Text } from '../typography'
import useStyles from './styles'
import { useFocusStyle } from '../../styles/global'
import { Flex } from '../layout/flex'
import { Icon } from '../icon'

export type TextFieldProps = React.FC<
  {
    id?: string
    label?: string
    invalid?: boolean
    placeholder?: string
    description?: string
    validationHelp?: string
  } & AriaTextFieldOptions
>

export const TextField: TextFieldProps = props => {
  const { label, invalid, description, validationHelp } = props
  const ref = React.useRef()

  const { labelProps, inputProps } = useTextField(props, ref)

  const theme = useTheme()
  const { onFocus } = useFocusStyle(props)
  const classes = useStyles({
    ...props,
    theme,
  })

  return (
    <Flex direction="column" gap={1}>
      {label && (
        <label className={classes.label} {...labelProps}>
          {label}
        </label>
      )}
      {validationHelp && (
        <Flex gap={1}>
          <Icon name="alert" color="danger" size="small" />
          <Text as="span" size="body-small" color="danger">
            {validationHelp}
          </Text>
        </Flex>
      )}
      <input
        className={clsx(classes.textField, onFocus)}
        {...inputProps}
        {...(invalid && { 'aria-invalid': true })}
        ref={ref}
      />
      {description && (
        <Text color="secondary" size="body-small">
          {description}
        </Text>
      )}
    </Flex>
  )
}

TextField.defaultProps = {
  label: 'My TextField',
}

export default TextField
