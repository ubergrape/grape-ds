import React, { useState } from 'react'
import clsx from 'clsx'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { createUseStyles } from 'react-jss'

import 'overlayscrollbars/css/OverlayScrollbars.css'

const useStyles = createUseStyles({
  customScrollbar: overflowPadding => {
    return {
      height: '100%',
      '& .os-viewport': {
        paddingRight: overflowPadding,
      },
      '& .os-scrollbar-handle': {
        backgroundColor: '#C6C6C6 !important',
        width: '8px !important',
      },
      '& .os-scrollbar-handle.active': {
        backgroundColor: '#727272 !important',
      },
      '& .os-scrollbar': {
        padding: '4px !important',
        boxSizing: 'content-box !important',
      },
    }
  },
})

export const ScrollBar = (
  props: OverlayScrollbarsComponent['props'],
): JSX.Element => {
  const [overflowPadding, setOverflowPadding] = useState(0)

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
            if (args.yScrollable) {
              setOverflowPadding(17)
              return
            }

            setOverflowPadding(0)
          },
        },
      }}
      className={clsx(styles.customScrollbar, 'os-theme-dark')}
      {...props}
    />
  )
}
