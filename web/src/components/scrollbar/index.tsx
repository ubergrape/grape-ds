import React, { Dispatch, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from 'overlayscrollbars-react'
import { createUseStyles } from 'react-jss'

import { parseToken } from '../../utils'
import tokens from '../../tokens'
import scrollBarStyles from './styles'

import 'overlayscrollbars/css/OverlayScrollbars.css'

/* Sets padding from right to size2X if the element has a vertical scrollbar,
so text and scrollbar don't overlap each other. */
export const onOverflowChanged = (
  args: {
    yScrollable: boolean
  },
  setPadding: Dispatch<SetStateAction<number>>,
): void => {
  if (args.yScrollable) {
    setPadding(parseToken(tokens.size2X))
    return
  }

  setPadding(0)
}

const useStyles = createUseStyles((theme: typeof tokens) => ({
  customScrollbar: overflowPadding =>
    scrollBarStyles({ overflowPadding, theme }),
}))

interface ScrollbarProps extends OverlayScrollbarsComponentProps {
  onOverflowPaddingChanged?: (overflowPadding: number) => void
}

export const Scrollbar = ({
  onOverflowPaddingChanged,
  ...props
}: ScrollbarProps): JSX.Element => {
  const [overflowPadding, setOverflowPadding] = useState(0)

  const styles = useStyles(overflowPadding)

  return (
    <OverlayScrollbarsComponent
      ref={ref => {
        // Accesibility violation fix. Elements that have scrollable content should be accessible by keyboard.
        if (ref) {
          ref
            .osTarget()
            .querySelector('.os-viewport')
            .setAttribute('tabindex', '0')
        }
      }}
      options={{
        callbacks: {
          onOverflowChanged: args => {
            onOverflowChanged(args, setOverflowPadding)
            if (onOverflowPaddingChanged) {
              onOverflowChanged(args, onOverflowPaddingChanged)
            }
          },
        },
      }}
      className={clsx(styles.customScrollbar, 'os-theme-dark')}
      {...props}
    />
  )
}
