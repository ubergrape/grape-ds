/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import clsx from 'clsx'
import { useTheme } from 'react-jss'

import { Text } from '../typography'
import useStyles from './styles'
import { useFocusStyle } from '../../styles/global'
import { ValidationIcon } from './icon'
import { Flex } from '../layout/flex'

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {label && (
        <label className={classes.label} {...labelProps}>
          {label}
        </label>
      )}
      {validationHelp && (
        <div className={clsx(classes.validationWrapper)}>
          <Flex gap={1}>
            <ValidationIcon />
            <Text as="span" size="body-small" color="danger">
              {validationHelp}
            </Text>
          </Flex>
        </div>
      )}
      <input
        className={clsx(classes.textField, onFocus, classes.marginTop)}
        {...inputProps}
        {...(invalid && { 'aria-invalid': true })}
        ref={ref}
      />
      {description && (
        <Text color="secondary" size="body-small" className={classes.marginTop}>
          {description}
        </Text>
      )}
    </div>
  )
}

TextField.defaultProps = {
  label: 'My TextField',
}

export default TextField
