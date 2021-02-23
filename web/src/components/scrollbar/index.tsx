import React, { Dispatch, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import scrollBarStyles from './styles'

import 'overlayscrollbars/css/OverlayScrollbars.css'

// Sets padding from right to size2X if the element has a vertical scrollbar,
// so text and scrollbar don't overlap each other. Added comment
export const onOverflowChanged = (
  args: {
    yScrollable: boolean
  },
  setPadding: Dispatch<SetStateAction<string>>,
): void => {
  if (args.yScrollable) {
    setPadding(tokens.size2X)
    return
  }

  setPadding('0px')
}

const useStyles = createUseStyles((theme: typeof tokens) => ({
  customScrollbar: overflowPadding =>
    scrollBarStyles({ overflowPadding, theme }),
}))

export const Scrollbar = (
  props: OverlayScrollbarsComponent['props'],
): JSX.Element => {
  const [overflowPadding, setOverflowPadding] = useState('0px')

  const styles = useStyles(overflowPadding)

  return (
    <OverlayScrollbarsComponent
      ref={ref => {
        // Accesibility viaolation fix. Elements that have scrollable content should be accessible by keyboard.
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
          },
        },
      }}
      className={clsx(styles.customScrollbar, 'os-theme-dark')}
      {...props}
    />
  )
}
