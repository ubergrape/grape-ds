import React from 'react'
import { useTheme } from 'react-jss'

import { Text } from '../../typography'

import useStyles from './styles'

const getTextSize = (size): 'body-large' | 'body-base' | 'body-small' => {
  switch (size) {
    case 'large':
      return 'body-large'
    case 'regular':
      return 'body-base'
    case 'small':
      return 'body-small'
    default:
      return 'body-base'
  }
}

export type TabProps = {
  onClick: (tab: number) => void
  tab: number
  active: boolean
  size: 'large' | 'regular' | 'small'
  align?: 'left' | 'right' | 'justify'
  children: string
}

export const Tab: React.FC<TabProps> = props => {
  const { children, size, active, tab, onClick } = props

  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

  return (
    <button onClick={() => onClick(tab)} type="button" className={classes.tab}>
      <Text color={active ? 'active' : 'primary'} size={getTextSize(size)}>
        {children}
      </Text>
    </button>
  )
}

Tab.defaultProps = {}
