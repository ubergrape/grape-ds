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
import { CheckmarkIcon, IndeterminateIcon } from './icons'

export interface Props {
  id?: string
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

const isLabelCheckbox = (variableToCheck): variableToCheck is WithLabel =>
  (variableToCheck as WithLabel).label !== undefined

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
  const Wrapper = hasLabel ? Text : 'div'

  return (
    <Wrapper
      {...(hasLabel && {
        size: 'body-base',
        as: 'label',
        color: disabled ? 'secondary' : 'primary',
        htmlFor: _id,
      })}
    >
      <VisuallyHidden>
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
          id={_id}
          {...(!isLabelCheckbox(props) && { 'aria-label': props.ariaLabel })}
          {...(invalid && { 'aria-invalid': 'true' })}
        />
      </VisuallyHidden>
      <div className={classes.label}>
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
        {isLabelCheckbox(props) && props.label}
      </div>

      {isLabelCheckbox(props) && props.helpText && (
        <Text size="body-small" color="secondary" className={classes.helpText}>
          {props.helpText}
        </Text>
      )}
    </Wrapper>
  )
}