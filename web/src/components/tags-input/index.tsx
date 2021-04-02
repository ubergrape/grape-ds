import React, { ReactElement, SyntheticEvent } from 'react'
import clsx from 'clsx'
import { FocusRing } from '@react-aria/focus'
import { useTextField } from '@react-aria/textfield'

import { Flex } from '../layout'
import { Text } from '../typography'
import { useStyles } from './styles'
import { useFocusStyle } from '../../styles/common'
import { genUid } from '../../utils'

type TagsInputProps = {
  label?: string
  children?: Array<ReactElement>
  isNecessityLabel?: boolean
  className?: string
  description?: string
  isRequired?: boolean
  autoFocus?: boolean
  minHeight?: string | number
  maxHeight?: string | number
  value?: string
  onKeyDown: () => void
  onFocus: (e: SyntheticEvent) => void
  onBlur: (e: SyntheticEvent) => void
  defaultValue?: string
  customLabels?: {
    required?: string
    optional?: string
  }
}

export const TagsInput: React.FC<TagsInputProps> = props => {
  const {
    children,
    className,
    label,
    description,
    isRequired,
    autoFocus,
    onFocus,
    onBlur,
    isNecessityLabel,
    customLabels = { required: 'required', optional: 'optional' },
  } = props

  const ref = React.useRef<HTMLInputElement>()
  const inputRef = React.useRef<HTMLInputElement>()
  const classes = useStyles(props)
  const { focusWithBorder } = useFocusStyle(props)

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      /* Workaround to display focus frame for a wrapper. Initial was written with useState, to set isFocused.
      But when onBlur triggered, it updated state and onClick element didn't trigger from the first click.
      https://stackoverflow.com/q/58106099
      A possible workaround is to use onMouseDown instead onClick for Button component. But:
        1) UX will get worse
        2) react-aria useButton doesn't have onMouseDown property.
      So, I guess this is the best solution. */
      onFocus: e => {
        onFocus?.(e)
        ref.current.classList.add(...focusWithBorder.split(' '), 'focus')
      },
      onBlur: e => {
        onBlur?.(e)
        ref.current.classList.remove(...focusWithBorder.split(' '), 'focus')
      },
    },
    ref,
  )

  return (
    <Flex
      direction="column"
      gap="0.5x"
      className={clsx(classes.wrapper, className)}
    >
      {label && (
        <label className={classes.label} {...labelProps}>
          <Text
            as="span"
            emphasis
            color="formfieldLabel"
            maxWidth="initial"
            size="small"
          >
            {label.toString()}
          </Text>
          {isNecessityLabel && (
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
      <div className={classes.inputWrapper} ref={ref}>
        <div className={classes.scrollbar}>
          {children &&
            children.map(child => (
              <div key={genUid()} className={classes.tag}>
                {child}
              </div>
            ))}
          <FocusRing {...(autoFocus && autoFocus)}>
            <input {...inputProps} ref={inputRef} className={classes.input} />
          </FocusRing>
        </div>
      </div>
      {description && (
        <Text color="secondary" maxWidth="initial" as="span" size="small">
          {description}
        </Text>
      )}
    </Flex>
  )
}
