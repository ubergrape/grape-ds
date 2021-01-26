/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState } from 'react'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import { FocusRing } from '@react-aria/focus'
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
  maxLength?: number
  minLength?: number
  autoFocus?: boolean
  type?: 'text' | 'number' | 'search' | 'password' | 'email' | 'tel'
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
    minLength,
    autoFocus,
    type,
    min,
    max,
    component,
    isRequired,
    renderLeft,
    renderRight,
    onChange,
    defaultValue,
    customLabels = { required: 'required', optional: 'optional' },
  } = props
  const ref = React.useRef<HTMLInputElement & HTMLTextAreaElement>()
  const [isDirty, setDirty] = useState(false)
  const [value, setValue] = useState(props.value || defaultValue || '')

  const allowedChars = maxLength - value.length
  const isMaxLengthReached = allowedChars < 0
  const isMinLengthReached = value.length > minLength

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      maxLength: undefined,
      minLength: undefined,
      onChange: p => {
        setValue(p)
        setDirty(p.length > 0)
        onChange?.(p)
      },
    },
    ref,
  )

  const isNumberValid = useMemo(() => {
    if (type !== 'number') return true
    if (value.length === 0) return true
    const val = Number(value)
    if (min !== undefined && val < min) return false
    if (max !== undefined && val > max) return false
    return true
  }, [value, min, max])

  const invalid =
    isInvalid || isMaxLengthReached || isMinLengthReached || !isNumberValid
  const customProps = { ...props, isInvalid: invalid }
  const { onFocus } = useFocusStyle(customProps)
  const classes = useStyles(customProps)

  const Component = component

  return (
    <Flex direction="column" gap="0.5x">
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
        <Flex gap="0.5x">
          <Icon name="alert" color="danger" size="small" />
          <Text as="span" size="small" color="danger">
            {validationHelp}
          </Text>
        </Flex>
      )}
      <div className={classes.inputWrapper}>
        {renderLeft?.()}
        <FocusRing {...(autoFocus && autoFocus)}>
          <Component
            className={clsx(classes.textField, onFocus)}
            {...inputProps}
            {...(invalid && { 'aria-invalid': true })}
            {...(min !== undefined && { min })}
            {...(max !== undefined && { max })}
            {...(validationHelp && {
              'aria-describedby': description.replace(/\s/g, ''),
            })}
            ref={ref}
          />
        </FocusRing>
        {maxLength > 0 && (
          <div className={classes.counter}>
            <Text size="base" color={invalid ? 'danger' : 'primary'}>
              {allowedChars}
            </Text>
          </div>
        )}
        {renderRight?.({
          onClear: () => {
            onChange?.('')
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
        <Text
          {...(validationHelp && { id: description.replace(/\s/g, '') })}
          color="secondary"
          size="small"
        >
          {description}
        </Text>
      )}
    </Flex>
  )
}
