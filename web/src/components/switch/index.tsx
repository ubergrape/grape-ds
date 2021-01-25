import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { useFocusRing } from '@react-aria/focus'
import { useToggleState } from '@react-stately/toggle'
import { useSwitch } from '@react-aria/switch'

import { genUid } from '../../utils'
import { useStyles } from './styles'
import { useFocusStyle } from '../../styles/global'
import { InputLabel } from '../input-label'

export interface Props {
  id?: string
  helpText?: string
  name?: string
  isChecked?: boolean
  isDisabled?: boolean
  isRequired?: boolean
}

export interface WithLabel extends Props {
  label: string
}

export interface SwitchOnly extends Props {
  ariaLabel: string
  helpText?: string
}

export type SwitchProps = SwitchOnly | WithLabel

const isLabelSwitch = (va): va is WithLabel =>
  va.label !== undefined && va.label !== ''

export const Switch: React.FC<SwitchProps> = props => {
  const { isChecked, isDisabled, id } = props
  const state = useToggleState({
    ...props,
    defaultSelected: isChecked,
  })
  const ref = useRef()
  const [_id] = useState(id || genUid())
  const { inputProps } = useSwitch(props, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()
  const focusClass = useFocusStyle(props)
  const classes = useStyles({
    ...props,
    isFocusVisible,
    isChecked: state.isSelected,
  })

  return (
    <InputLabel
      {...props}
      isDisabled={isDisabled}
      id={_id}
      helpTextClass={classes.helpText}
      renderHiddenInput={() => (
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
          id={_id}
          {...(isLabelSwitch(props)
            ? { 'aria-labelledby': props.label.replace(/\s/g, '') }
            : { 'aria-label': props.ariaLabel })}
        />
      )}
      renderInput={() => (
        <div
          className={clsx(
            classes.switch,
            isFocusVisible && focusClass.focus,
            classes.spacing,
          )}
        >
          <div
            className={clsx(
              classes.dot,
              state.isSelected ? classes.dotOn : classes.dotOff,
            )}
          />
        </div>
      )}
    />
  )
}
