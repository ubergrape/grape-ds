import React, { useState, useMemo, ReactElement } from 'react'
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
  width?: number | string
  value?: string
  onKeyDown: () => void
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
    isNecessityLabel,
    customLabels = { required: 'required', optional: 'optional' },
  } = props

  const ref = React.useRef<HTMLInputElement>()
  const classes = useStyles(props)
  const { focusWithBorder } = useFocusStyle(props)
  const [isFocused, setFocusState] = useState(autoFocus || false)

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      onFocus: () => {
        setFocusState(true)
      },
      onBlur: () => {
        setFocusState(false)
      },
    },
    ref,
  )

  const key = useMemo(() => genUid(), [])

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
      <div
        className={clsx(
          isFocused && focusWithBorder,
          isFocused && 'focus',
          classes.inputWrapper,
        )}
      >
        {children &&
          children.map(child => <div className={classes.tag}>{child}</div>)}
        <FocusRing {...(autoFocus && autoFocus)}>
          <input
            {...inputProps}
            key={key}
            ref={ref}
            className={classes.input}
          />
        </FocusRing>
      </div>
      {description && (
        <Text color="secondary" maxWidth="initial" as="span" size="small">
          {description}
        </Text>
      )}
    </Flex>
  )
}
