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
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isRequiredLabel?: boolean
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
  value?: string
  defaultValue?: string
  renderLeft?: () => JSX.Element
  renderRight?: (props: {
    onClear: () => void
    isDirty?: boolean
  }) => JSX.Element
}

const textAreaRender = ({ props, ref, setOverflowPadding }) =>
  OverlayScrollbars(ref.current, {
    resize: 'allowResize' in props && props.allowResize ? 'vertical' : 'none',
    textarea: {
      dynHeight: 'autoExpand' in props && props.autoExpand,
    },
    callbacks: {
      onOverflowChanged: args => {
        onOverflowChanged(args, setOverflowPadding)
      },
    },
  })

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
    width,
    height,
    maxLength,
    minLength,
    component,
    isRequiredLabel,
    renderLeft,
    renderRight,
    customLabels = { required: 'required', optional: 'optional' },
  } = props
  const ref = React.useRef<HTMLInputElement & HTMLTextAreaElement>()

  const min = 'min' in props ? props.min : undefined
  const max = 'max' in props ? props.max : undefined

  const [isDirty, setDirty] = useState(false)
  const [osInstance, setOsInstance] = useState(null)
  const [value, setValue] = useState(props.value || props.defaultValue || '')
  const [overflowPadding, setOverflowPadding] = useState('0px')

  // https://github.com/KingSora/OverlayScrollbars/issues/146
  useEffect(() => {
    if (component === 'textarea') {
      setOsInstance(textAreaRender({ props, ref, setOverflowPadding }))
    }

    return () => {
      if (component === 'textarea' && OverlayScrollbars.valid(osInstance)) {
        osInstance.destroy()
      }
    }
  }, [])

  const usePrevious = <T extends unknown>(v: T): T | undefined => {
    const previousRef = React.useRef<T>()
    useEffect(() => {
      previousRef.current = v
    })
    return previousRef.current
  }

  if (component === 'textarea') {
    const allowResize = 'allowResize' in props ? props.allowResize : undefined
    const autoExpand = 'autoExpand' in props ? props.autoExpand : undefined
    const minHeight = 'minHeight' in props ? props.minHeight : undefined
    const maxHeight = 'maxHeight' in props ? props.maxHeight : undefined
    const rows = 'rows' in props ? props.rows : undefined

    const prevAmount = usePrevious({
      width,
      height,
      maxLength,
      allowResize,
      autoExpand,
      minHeight,
      maxHeight,
      isReadOnly,
      isDisabled,
      rows,
    })

    useEffect(() => {
      if (OverlayScrollbars.valid(osInstance)) {
        // Re-render textarea, if these two property changed, otherwise old state will be shown
        if (
          prevAmount.allowResize !== allowResize ||
          prevAmount.autoExpand !== autoExpand ||
          prevAmount.width !== width ||
          prevAmount.height !== height ||
          prevAmount.minHeight !== minHeight ||
          prevAmount.maxHeight !== maxHeight ||
          prevAmount.isReadOnly !== isReadOnly ||
          prevAmount.isDisabled !== isDisabled ||
          prevAmount.rows !== rows
        ) {
          osInstance.destroy()

          setOsInstance(textAreaRender({ props, ref, setOverflowPadding }))
        }
      }
    })
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
      onFocus: e => {
        if (component === 'textarea') {
          const textarea = e.target as HTMLTextAreaElement
          textarea.setSelectionRange(0, textarea.value.length)
        }
      },
    },
    ref,
  )

  const isNumberValid = useMemo(() => {
    if (props.type === 'search' || props.type !== 'number') return true
    if (value.length === 0) return true
    const val = Number(value)
    if ('min' in props && props.min !== undefined && val < props.min) {
      return false
    }
    if ('max' in props && props.max !== undefined && val > props.max)
      return false
    return true
  }, [value])

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
    <Flex className={classes.wrapper} direction="column" gap="0.5x">
      {label && (
        <label className={classes.label} {...labelProps}>
          <Text
            as="span"
            color="formfieldLabel"
            maxWidth="initial"
            size="small"
          >
            {label.toString()}
          </Text>
          {isRequiredLabel !== undefined && (
            <Text
              color="secondary"
              size="small"
              as="span"
              className={classes.suffix}
            >
              ({isRequiredLabel ? customLabels.required : customLabels.optional}
              )
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
          {...(component === 'textarea' &&
            'rows' in props &&
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
