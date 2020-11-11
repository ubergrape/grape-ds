import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { TabProps } from '.'

export default createUseStyles((theme: typeof tokens) => ({
  button: ({ activeTab, tab, align }: TabProps) => {
    const isActive = activeTab === tab

    return {
      background: 'none',
      display: 'flex',
      justifyContent: 'center',
      padding: [0, theme.sizeHalfX, theme.sizeHalfX, theme.sizeHalfX],
      border: 0,
      flexBasis: align === 'justify' ? '100%' : 'auto',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: isActive
        ? [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorActive]
        : [theme.borderWidthTab, 'solid', 'transparent'],
      '&:not(:last-child)': {
        marginRight: theme.spaceTabGroup,
      },
      '&:hover': {
        borderBottom: isActive
          ? [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorActive]
          : [theme.borderWidthTab, 'solid', theme.colorBorderTabIndicatorHover],
      },
    }
  },
  text: {
    alignSelf: 'flex-end',
  },
}))
