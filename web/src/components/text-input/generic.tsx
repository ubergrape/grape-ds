/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
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
  min?: number
  max?: number
  customLabels?: {
    required?: string
    optional?: string
  }
  renderLeft?: () => JSX.Element
  renderRight?: (props: {
    onClear: () => void
    isDirty?: boolean
  }) => JSX.Element
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
    renderLeft,
    renderRight,
    min,
    max,
    customLabels = { required: 'required', optional: 'optional' },
  } = props
  const ref = React.useRef<HTMLInputElement & HTMLTextAreaElement>()
  const [allowedChars, setAllowedChars] = useState(
    maxLength - (props.value?.length ?? 0),
  )
  const [isDirty, setDirty] = useState(false)

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      maxLength: undefined,
      onChange: p => {
        setDirty(p.length > 0)
        props.onChange?.(p)
        setAllowedChars(maxLength - p.length)
      },
    },
    ref,
  )
  const invalid = isInvalid || allowedChars < 0
  const customProps = { ...props, isInvalid: invalid }
  const { onFocus } = useFocusStyle(customProps)
  const classes = useStyles(customProps)

  const Component = component

  return (
    <div style={{ width: '100%' }}>
      <Flex direction="column" gap={1}>
        {label && (
          <label className={classes.label} {...labelProps}>
            {label}
            {isRequired !== undefined && (
              <Text
                color="secondary"
                size="small"
                as="span"
                className={classes.suffix}
              >
                ({isRequired ? customLabels.required : customLabels.optional})
              </Text>
            )}
          </label>
        )}
        {validationHelp && (
          <Flex gap={1}>
            <Icon name="alert" color="danger" size="small" />
            <Text as="span" size="small" color="danger">
              {validationHelp}
            </Text>
          </Flex>
        )}
        <div className={classes.inputWrapper}>
          {renderLeft?.()}

          <Component
            className={clsx(classes.textField, onFocus)}
            {...inputProps}
            {...(invalid && { 'aria-invalid': true })}
            {...(min !== undefined && { min })}
            {...(max !== undefined && { max })}
            ref={ref}
          />
          {maxLength && (
            <div className={classes.counter}>
              <Text size="regular" color={invalid ? 'danger' : 'primary'}>
                {allowedChars}
              </Text>
            </div>
          )}
          {renderRight?.({
            onClear: () => {
              props.onChange?.('')
              setAllowedChars(maxLength)
              setDirty(false)
              if (ref.current) {
                ref.current.value = ''
                ref.current.focus()
              }
            },
            isDirty,
          })}
        </div>

        {description && (
          <Text color="secondary" size="small">
            {description}
          </Text>
        )}
      </Flex>
    </div>
  )
}
