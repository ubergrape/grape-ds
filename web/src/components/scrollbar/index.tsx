import React from 'react'
import clsx from 'clsx'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { createUseStyles } from 'react-jss'

import 'overlayscrollbars/css/OverlayScrollbars.css'

const useStyles = createUseStyles(() => ({
  customScrollbar: {
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
  },
}))

export const ScrollBar = (
  props: OverlayScrollbarsComponent['props'],
): JSX.Element => {
  const styles = useStyles()
  return (
    <OverlayScrollbarsComponent
      className={clsx(styles.customScrollbar, 'os-theme-dark')}
      {...props}
    />
  )
}
