import React, { useRef, useState } from 'react'
import { useTheme } from 'react-jss'
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
  label: string
  helpText?: string
  name?: string
  checked?: boolean
  disabled?: boolean
}

export const Switch: React.FC<Props> = props => {
  const { checked, disabled, id } = props
  const state = useToggleState({
    ...props,
    isSelected: checked,
  })
  const ref = useRef()
  const [_id] = useState(id || genUid())
  const { inputProps } = useSwitch(
    { ...props, isDisabled: disabled },
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
    <InputLabel
      disabled={disabled}
      {...props}
      id={_id}
      helpTextClass={classes.helpText}
      renderHiddenInput={() => (
        <input {...inputProps} {...focusProps} ref={ref} id={_id} />
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
