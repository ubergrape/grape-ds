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

export type CheckboxProps = {
  children?: string
  checked?: boolean
  invalid?: boolean
  disabled?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { children, checked } = props
  const state = useToggleState({ ...props, isSelected: checked })
  const ref = useRef()
  const [id] = useState(genUid())
  const { inputProps } = useCheckbox(props, state, ref)
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
    <label className={classes.label} htmlFor={id}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} id={id} />
      </VisuallyHidden>
      <div
        className={clsx(classes.checkbox, isFocusVisible && focusClass.focus)}
        style={{ marginRight: 5 }}
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
      </div>
      {children}
    </label>
  )
}
