/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useEffect, useState } from 'react'
import OverlayScrollbars from 'overlayscrollbars'
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import clsx from 'clsx'

import { Text } from '../typography'
import useStyles from './styles'
import { useFocusStyle } from '../../styles/global'
import { Flex } from '../layout/flex'
import { Icon } from '../icon'
import { onOverflowChanged } from '../scrollbar'
import { genUid } from '../../utils'

import { TextAreaWithLabelProps, TextAreaWithoutLabelProps } from './text-area'
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
  placeholder?: string
  description?: string
  validationHelp?: string
  isRequired?: boolean
  maxLength?: number
  minLength?: number
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
    description,
    validationHelp,
    maxLength,
    minLength,
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
  const [osInstance, setOsInstance] = useState(null)
  const [value, setValue] = useState(props.value || props.defaultValue || '')
  const [overflowPadding, setOverflowPadding] = useState('0px')

  // https://github.com/KingSora/OverlayScrollbars/issues/146
  useEffect(() => {
    if (component === 'textarea') {
      setOsInstance(
        OverlayScrollbars(ref.current, {
          resize:
            'allowResize' in props && props.allowResize ? 'vertical' : 'none',
          textarea: {
            dynHeight: 'autoExpand' in props && props.autoExpand,
          },
          callbacks: {
            onOverflowChanged: args => {
              onOverflowChanged(args, setOverflowPadding)
            },
          },
        }),
      )
    }

    return () => {
      if (component === 'textarea' && OverlayScrollbars.valid(osInstance)) {
        osInstance.destroy()
      }
    }
  }, [])

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
        props.onChange?.(p)
      },
    },
    ref,
  )

  const isNumberValid = useMemo(() => {
    if (props.type !== 'number') return true
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
  let classes
  if (component === 'textarea') {
    classes = useStyles({ ...customProps, overflowPadding })
  } else {
    classes = useStyles(customProps)
  }

  const Component = component
  const validationHelpId = genUid()

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
          <Text as="span" size="small" color="danger" id={validationHelpId}>
            {validationHelp}
          </Text>
        </Flex>
      )}
      <div className={classes.inputWrapper}>
        {renderLeft?.()}

        <Component
          className={clsx(classes.textField, classes.customScrollbar, onFocus)}
          {...inputProps}
          {...(invalid && { 'aria-invalid': true })}
          {...(min !== undefined && { min })}
          {...(max !== undefined && { max })}
          {...(validationHelp && {
            'aria-describedby': validationHelpId,
          })}
          {...(component === 'textarea' &&
            'rows' in props &&
            props.rows && { rows: props.rows })}
          ref={ref}
        />
        {maxLength > 0 && (
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
