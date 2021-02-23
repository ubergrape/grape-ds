/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState } from 'react'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import clsx from 'clsx'

import { Text } from '../typography'
import useStyles from './styles'
import { useFocusStyle } from '../../styles/global'
import { Flex } from '../layout/flex'
import { Icon } from '../icon'
import { genUid } from '../../utils'

import {
  onTextAreaFocus,
  useTextAreaEffects,
  TextAreaWithLabelProps,
  TextAreaWithoutLabelProps,
} from './text-area'
import {
  TextFieldWithLabelProps,
  TextFieldWithoutLabelProps,
} from './text-field'
import {
  SearchFieldWithLabelProps,
  SearchFieldWithoutLabelProps,
} from './search-field'

export interface InputComponentProps extends AriaTextFieldOptions {
  id?: string
  isInvalid?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  description?: string
  validationHelp?: string
  height?: number | string
  width?: number | string
  maxLength?: number
  minLength?: number
  customLabels?: {
    required?: string
    optional?: string
  }
  // Defines if visual label indicator for isRequired value should be shown
  isNecessityLabel?: boolean
  value?: string
  defaultValue?: string
  renderLeft?: () => JSX.Element
  renderRight?: (props: {
    onClear: () => void
    isDirty?: boolean
  }) => JSX.Element
}

export interface InputProps extends InputComponentProps {
  component: 'input'
}

export type GenericFieldProps =
  | TextAreaWithLabelProps
  | TextAreaWithoutLabelProps
  | TextFieldWithLabelProps
  | TextFieldWithoutLabelProps
  | SearchFieldWithLabelProps
  | SearchFieldWithoutLabelProps

export const GenericField: React.FC<GenericFieldProps> = props => {
  const {
    label,
    isInvalid,
    isDisabled,
    isReadOnly,
    description,
    validationHelp,
    isRequired,
    isNecessityLabel,
    maxLength,
    minLength,
    renderLeft,
    renderRight,
    customLabels = { required: 'required', optional: 'optional' },
  } = props
  const ref = React.useRef<HTMLInputElement & HTMLTextAreaElement>()

  const [isDirty, setDirty] = useState(false)
  const [osInstance, setOsInstance] = useState(null)
  const [value, setValue] = useState(props.value || props.defaultValue || '')
  const [overflowPadding, setOverflowPadding] = useState('0px')

  // https://github.com/KingSora/OverlayScrollbars/issues/146
  if (props.component === 'textarea') {
    useTextAreaEffects(
      props,
      {
        osInstance,
        setOsInstance,
        setOverflowPadding,
      },
      ref,
    )
  }

  const allowedChars = maxLength - value.length
  const isMaxLengthReached = allowedChars < 0
  const isMinLengthReached = value.length < minLength

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      maxLength: undefined,
      minLength: undefined,
      onChange: v => {
        setValue(v)
        setDirty(v.length > 0)
        props.onChange?.(v)
      },
      ...(props.component === 'textarea' && {
        onFocus: e => onTextAreaFocus(e, props),
      }),
    },
    ref,
  )

  const min = 'min' in props ? props.min : undefined
  const max = 'max' in props ? props.max : undefined

  const isNumberValid = useMemo(() => {
    if (props.type === 'search' || props.type !== 'number') return true
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
  const classes = useStyles({ ...customProps, overflowPadding })

  const Component = props.component
  const validationHelpId = genUid()

  return (
    <Flex className={classes.wrapper} direction="column" gap="0.5x">
      {label && (
        <label className={classes.label} {...labelProps}>
          <Text
            as="span"
            emphasis
            color="formfieldLabel"
            maxWidth="initial"
            size="small"
          >
            {label.toString()}
          </Text>
          {isNecessityLabel && (
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
          <Icon
            name="alert"
            className={classes.validationIcon}
            color="danger"
            size="small"
          />
          <Text
            as="span"
            maxWidth="initial"
            size="small"
            color="danger"
            id={validationHelpId}
          >
            {validationHelp}
          </Text>
        </Flex>
      )}
      <div className={clsx(classes.inputWrapper, onFocus)}>
        {renderLeft?.()}

        <Component
          className={clsx(
            classes.textField,
            classes.customScrollbar,
            onFocus,
            'os-text-inherit',
            'os-textarea',
          )}
          {...inputProps}
          {...(invalid && { 'aria-invalid': true })}
          {...(min !== undefined && { min })}
          {...(max !== undefined && { max })}
          {...(validationHelp && {
            'aria-describedby': validationHelpId,
          })}
          {...(props.component === 'textarea' &&
            props.rows && { rows: props.rows })}
          ref={ref}
        />
        {maxLength > 0 && !isDisabled && !isReadOnly && (
          <div className={classes.counterWrapper}>
            <Text
              className={classes.counter}
              size="base"
              color={invalid ? 'danger' : 'formfieldCounter'}
            >
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
        <Text color="secondary" maxWidth="initial" as="span" size="small">
          {description}
        </Text>
      )}
    </Flex>
  )
}
