import React, { Dispatch, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { createUseStyles } from 'react-jss'

import tokens from '../../tokens'
import scrollBarStyles from './styles'

import 'overlayscrollbars/css/OverlayScrollbars.css'

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

const useStyles = createUseStyles({
  customScrollbar: overflowPadding => scrollBarStyles(overflowPadding),
})

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
