import React, { useRef, useState } from 'react'
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
  isChecked?: boolean
  isInvalid?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  isIndeterminate?: boolean
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
  const { isChecked, isIndeterminate, isDisabled, isInvalid, id } = props
  const state = useToggleState({
    ...props,
    defaultSelected: isChecked,
  })
  const ref = useRef()
  const [_id] = useState(id || genUid())
  const { inputProps } = useCheckbox(props, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()
  const focusClass = useFocusStyle(props)
  const classes = useStyles({
    ...props,
    isFocusVisible,
    isChecked: state.isSelected,
  })
  const hasLabel = isLabelCheckbox(props)

  return (
    <InputLabel
      isDisabled={isDisabled}
      id={_id}
      {...props}
      renderHiddenInput={() => (
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
          id={_id}
          {...(isLabelCheckbox(props)
            ? { 'aria-labelledby': props.label.replace(/\s/g, '') }
            : { 'aria-label': props.ariaLabel })}
          {...(isInvalid && { 'aria-invalid': 'true' })}
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
          {isIndeterminate && !state.isSelected && <IndeterminateIcon />}
        </div>
      )}
    />
  )
}
