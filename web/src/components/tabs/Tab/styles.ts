import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles((theme: typeof tokens) => ({
  button: {
    background: 'none',
    zIndex: 1,
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
    padding: [0, '8px', 0, '8px'],
    border: 0,
    flexBasis: ({ align }) => (align === 'justify' ? '100%' : 'auto'),
    cursor: 'pointer',
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
      outlineOffset: 0,
    },
    '&:focus-visible': {
      outlineOffset: -2,
      outline: `${theme.outlineWidthFocus} solid ${theme.colorOutlineFocusDefault}`,
    },
    ':focus:not(:focus-visible)': {
      outline: 'none',
    },
  },
  tab: ({ activeTab, tab }) => {
    const isActive = activeTab === tab

    return {
      border: 0,
      alignSelf: 'flex-end',
      paddingBottom: theme.sizeHalfX,
      borderBottom: isActive
        ? [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorActive]
        : [theme.borderWidthTab, 'solid', 'transparent'],
      '&:hover': {
        borderBottom: isActive
          ? [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorActive]
          : [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorHover],
      },
    }
  },
}))
