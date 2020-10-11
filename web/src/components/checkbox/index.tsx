import React, { useRef, useState } from 'react'
import { useTheme } from 'react-jss'
import clsx from 'clsx'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useFocusRing } from '@react-aria/focus'
import { useToggleState } from '@react-stately/toggle'
import { useCheckbox } from '@react-aria/checkbox'

import { genUid } from '../../utils'
import { useStyles } from './styles'
import { useFocusStyle } from '../../styles/global'
import { Text } from '../typography'

export type CheckboxProps = {
  label?: string
  helpText?: string
  checked?: boolean
  invalid?: boolean
  disabled?: boolean
  required?: boolean
  indeterminate?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { label, helpText, checked, disabled, indeterminate } = props
  const state = useToggleState({
    ...props,
    isSelected: checked,
  })
  const ref = useRef()
  const [id] = useState(genUid())
  const { inputProps } = useCheckbox(
    { ...props, isDisabled: disabled, isIndeterminate: indeterminate },
    state,
    ref,
  )
  const { isFocusVisible, focusProps } = useFocusRing()
  const theme = useTheme()
  const focusClass = useFocusStyle(props)
  const classes = useStyles({
    ...props,
    theme,
    isFocusVisible,
    checked: state.isSelected,
  })

  return (
    <Text
      size="body-base"
      as="label"
      color={disabled ? 'secondary' : 'primary'}
      htmlFor={id}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} id={id} />
      </VisuallyHidden>
      <div className={classes.label}>
        <div
          className={clsx(classes.checkbox, isFocusVisible && focusClass.focus)}
          style={{ marginRight: 8 }}
        >
          {state.isSelected && (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 5.5L4.5 8L10.5 1.5"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
          {indeterminate && !state.isSelected && (
            <svg
              width="8"
              height="2"
              viewBox="0 0 8 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="8" height="2" fill="currentColor" />
            </svg>
          )}
        </div>
        {label}
      </div>

      {helpText && (
        <Text size="label" color="secondary" className={classes.helpText}>
          {helpText}
        </Text>
      )}
    </Text>
  )
}
