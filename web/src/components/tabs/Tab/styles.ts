import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles((theme: typeof tokens) => ({
  tab: ({ active, align }) => ({
    background: 'none',
    zIndex: 1,
    position: 'relative',
    paddingBottom: theme.sizeHalfX,
    border: 0,
    flexBasis: align === 'justify' ? '100%' : 'auto',
    cursor: 'pointer',
    textDecoration: 'none',
    borderBottom: active
      ? [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorActive]
      : [theme.borderWidthTab, 'solid', 'transparent'],
    '&:not(:first-child):not(:last-child)': {
      margin: [0, theme.spaceTabGroup],
    },
    '&:hover': {
      borderBottom: active
        ? [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorActive]
        : [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorHover],
    },
    '&:focus': {
      outline: 'none',
      outlineOffset: 0,
    },
    '&:focus-visible': {
      outline: `${theme.outlineWidthFocus} solid ${theme.colorOutlineFocusDefault}`,
    },
    ':focus:not(:focus-visible)': {
      outline: 'none',
    },
  }),
}))
