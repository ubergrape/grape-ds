/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import {
  AriaTextFieldOptions,
  TextFieldAria,
  useTextField,
} from '@react-aria/textfield'
import clsx from 'clsx'

import { Text } from '../typography'
import useStyles from './styles'
import { useFocusStyle } from '../../styles/global'
import { Flex } from '../layout/flex'
import { Icon } from '../icon'

export interface TextInputProps extends AriaTextFieldOptions {
  id?: string
  isInvalid?: boolean
  placeholder?: string
  description?: string
  validationHelp?: string
}

export interface WithoutLabel extends TextInputProps {
  'aria-label': string
}

export interface WithLabel extends TextInputProps {
  label: string
}

export type InputProps = WithoutLabel | WithLabel

export const GenericField: React.FC<
  InputProps & { component: 'input' | 'textarea' }
> = props => {
  const {
    label,
    isInvalid,
    description,
    validationHelp,
    maxLength,
    component,
    isRequired,
  } = props
  const ref = React.useRef()
  const [allowedChars, setAllowedChars] = useState(
    maxLength - (props.value?.length ?? 0),
  )
  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      onChange: p => {
        props.onChange?.(p)
        setAllowedChars(maxLength - p.length)
      },
    },
    ref,
  )
  const { onFocus } = useFocusStyle(props)
  const classes = useStyles(props)

  const Component = component

  return (
    <Flex direction="column" gap={1}>
      {label && (
        <label className={classes.label} {...labelProps}>
          {label}
          {isRequired !== undefined && (
            <Text
              color="secondary"
              size="body-small"
              as="span"
              className={classes.suffix}
            >
              ({isRequired ? 'required' : 'optional'})
            </Text>
          )}
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
      <div style={{ position: 'relative' }}>
        <Component
          className={clsx(classes.textField, onFocus)}
          {...inputProps}
          {...((isInvalid || allowedChars < 0) && { 'aria-invalid': true })}
          ref={ref}
        />
        {maxLength && (
          <div className={classes.counter}>
            <span>{allowedChars}</span>
          </div>
        )}
      </div>

      {description && (
        <Text color="secondary" size="body-small">
          {description}
        </Text>
      )}
    </Flex>
  )
}
