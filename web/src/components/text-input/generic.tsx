/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState } from 'react'
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
  isRequired?: boolean
  min?: number
  max?: number
  customLabels?: {
    required?: string
    optional?: string
  }
  value?: string
  defaultValue?: string
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
  const [isDirty, setDirty] = useState(false)
  const [value, setValue] = useState(props.value || props.defaultValue || '')

  const allowedChars = maxLength - value.length

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      maxLength: undefined,
      onChange: p => {
        setValue(p)
        setDirty(p.length > 0)
        props.onChange?.(p)
      },
    },
    ref,
  )

  const numberValid = useMemo(() => {
    if (props.type !== 'number') return true
    if (value.length === 0) return true
    const val = Number(value)
    if (min !== undefined && val < min) return false
    if (max !== undefined && val > max) return false
    return true
  }, [value, min, max])

  const invalid = isInvalid || allowedChars < 0 || !numberValid
  const customProps = { ...props, isInvalid: invalid }
  const { onFocus } = useFocusStyle(customProps)
  const classes = useStyles(customProps)

  const Component = component

  return (
    <Flex direction="column" gap="1x">
      {label && (
        <label className={classes.label} {...labelProps}>
          <span>{label}</span>
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
        <Flex gap="1x">
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
            <Text size="base" color={invalid ? 'danger' : 'primary'}>
              {allowedChars}
            </Text>
          </div>
        )}
        {renderRight?.({
          onClear: () => {
            props.onChange?.('')
            setValue('')
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
  )
}
