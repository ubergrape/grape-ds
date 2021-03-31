/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState, SyntheticEvent } from 'react'
import { FocusRing } from '@react-aria/focus'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import clsx from 'clsx'

import { Text } from '../typography'
import useStyles from './styles'
import { useFocusStyle } from '../../styles/common'
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
  name?: string
  isInvalid?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  description?: string
  validationHelp?: string
  width?: number | string
  minLength?: number
  customLabels?: {
    required?: string
    optional?: string
  }
  // Defines if visual label indicator for isRequired value should be shown
  isNecessityLabel?: boolean
  autoFocus?: boolean
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
  renderLeft?: () => JSX.Element
  renderRight?: (props: {
    onClear: () => void
    isDirty?: boolean
  }) => JSX.Element
  className: string
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
    type,
    isInvalid,
    isDisabled,
    isReadOnly,
    description,
    validationHelp,
    isRequired,
    isNecessityLabel,
    autoFocus,
    maxLength,
    renderLeft,
    renderRight,
    className,
    customLabels = { required: 'required', optional: 'optional' },
  } = props
  const ref = React.useRef<HTMLInputElement & HTMLTextAreaElement>()

  const [isDirty, setDirty] = useState(false)
  const [osInstance, setOsInstance] = useState(null)
  const [value, setValue] = useState(props.value || props.defaultValue || '')
  const [overflowPadding, setOverflowPadding] = useState(0)

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

  const isTypeNumber = type === 'number'
  const isTypeSearch = type === 'search'

  const allowedChars = maxLength - value.length
  const isMaxLengthReached = allowedChars < 0 && !isTypeNumber

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      onChange: v => {
        setValue(v)
        setDirty(v.length > 0)
        props.onChange?.(v)
      },
      onFocus: e => {
        if (props.component === 'textarea') onTextAreaFocus(e, props)
        props.onFocus?.(e)
      },
    },
    ref,
  )

  const min = 'min' in props ? props.min : undefined
  const max = 'max' in props ? props.max : undefined

  const isNumberValid = useMemo(() => {
    if (type === 'search' || type !== 'number') return true
    if (value.length === 0) return true
    const val = Number(value)
    if (min !== undefined && val < min) return false
    if (max !== undefined && val > max) return false
    return true
  }, [value, min, max])

  const invalid = isInvalid || isMaxLengthReached || !isNumberValid
  const customProps = { ...props, isInvalid: invalid }
  const { onFocus } = useFocusStyle(customProps)
  const classes = useStyles({ ...customProps, overflowPadding })

  const Component = props.component
  const validationHelpId = genUid()

  return (
    <Flex
      className={clsx(classes.wrapper, className)}
      direction="column"
      gap="0.5x"
    >
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
      <div
        className={clsx(
          classes.inputWrapper,
          props.component === 'textarea' && onFocus,
        )}
      >
        <FocusRing {...(autoFocus && autoFocus)}>
          <Component
            className={clsx(
              classes.textField,
              props.component === 'textarea'
                ? classes.textArea
                : classes.textInput,
              props.component === 'textarea' && classes.customScrollbar,
              props.component === 'input' && onFocus,
              'os-text-inherit',
              'os-textarea',
            )}
            {...inputProps}
            {...(isRequired && { required: true })}
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
        </FocusRing>
        {/* Rendering left part of input after input, because applying -webkit-transform: translate3d(0,0,0)
        makes the left part non-visible. Another solution would be applying z-index to the left part, but as it
        has position: absolute I think it's easier to just change render order */}
        {renderLeft?.()}
        {maxLength > 0 &&
          !isDisabled &&
          !isReadOnly &&
          !isTypeNumber &&
          !isTypeSearch && (
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
