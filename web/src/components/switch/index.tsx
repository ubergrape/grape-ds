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
  label: string
  helpText?: string
  name?: string
  isChecked?: boolean
  isDisabled?: boolean
}

export const Switch: React.FC<Props> = props => {
  const { isChecked, isDisabled, id } = props
  const state = useToggleState({
    ...props,
    isSelected: isChecked,
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
