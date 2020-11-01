import React, { useRef, useState } from 'react'
import { useTheme } from 'react-jss'
import clsx from 'clsx'
import { useFocusRing } from '@react-aria/focus'
import { useToggleState } from '@react-stately/toggle'
import { useCheckbox } from '@react-aria/checkbox'

import { genUid } from '../../utils'
import { useStyles } from './styles'
import { useFocusStyle } from '../../styles/global'
import { CheckmarkIcon, IndeterminateIcon } from './icons'
import { InputLabel } from '../input-label'

export interface Props {
  id?: string
  name?: string
  checked?: boolean
  invalid?: boolean
  disabled?: boolean
  required?: boolean
  indeterminate?: boolean
}

export interface WithLabel extends Props {
  label: string
  helpText?: string
}
export interface CheckboxOnly extends Props {
  ariaLabel: string
}

export type CheckboxProps = CheckboxOnly | WithLabel

const isLabelCheckbox = (va): va is WithLabel =>
  va.label !== undefined && va.label !== ''

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { checked, disabled, indeterminate, invalid, id } = props
  const state = useToggleState({
    ...props,
    isSelected: checked,
  })
  const ref = useRef()
  const [_id] = useState(id || genUid())
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
  const hasLabel = isLabelCheckbox(props)

  return (
    <InputLabel
      disabled={disabled}
      id={_id}
      {...props}
      renderHiddenInput={() => (
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
          id={_id}
          {...(!isLabelCheckbox(props) && { 'aria-label': props.ariaLabel })}
          {...(invalid && { 'aria-invalid': 'true' })}
        />
      )}
      renderInput={() => (
        <div
          className={clsx(
            classes.checkbox,
            isFocusVisible && focusClass.focus,
            hasLabel && classes.spacing,
          )}
        >
          {state.isSelected && <CheckmarkIcon />}
          {indeterminate && !state.isSelected && <IndeterminateIcon />}
        </div>
      )}
    />
  )
}
