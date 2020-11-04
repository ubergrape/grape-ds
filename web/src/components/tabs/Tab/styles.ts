import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

export default createUseStyles((theme: typeof tokens) => ({
  button: {
    background: 'none',
    zIndex: 1,
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
    padding: [0, theme.size1X, 0, theme.size1X],
    border: 0,
    flexBasis: ({ align }) => (align === 'justify' ? '100%' : 'auto'),
    cursor: 'pointer',
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
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
      width: '100%',
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
