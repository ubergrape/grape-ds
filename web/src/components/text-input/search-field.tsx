import React from 'react'
import { createUseStyles } from 'react-jss'
import tokens from '../../tokens'
import Button from '../button'
import { Icon } from '../icon'

import { GenericField, InputProps } from './generic'

const useStyles = createUseStyles(() => ({
  leftIcon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    top: 0,
    left: tokens.size1HalfX,
  },
  rightIcon: {
    position: 'absolute',
    right: tokens.size1X,
    top: tokens.sizeHalfX,
  },
}))

export const SearchField: React.FC<InputProps> = props => {
  const classes = useStyles(props)
  return (
    <GenericField
      {...props}
      component="input"
      renderLeft={() => (
        <div className={classes.leftIcon}>
          <Icon name="search" size="small" />
        </div>
      )}
      renderRight={({ onClear, isDirty }) => {
        return isDirty ? (
          <div className={classes.rightIcon}>
            <Button
              onClick={onClear}
              icon="close"
              size="small"
              appearance="minimal"
            />
          </div>
        ) : null
      }}
    />
  )
}

SearchField.defaultProps = {}

export default SearchField
