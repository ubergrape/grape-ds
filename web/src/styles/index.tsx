import React from 'react'
import { JssProvider } from 'react-jss'
import jss from './jssConfig'

const injectJss = <P extends Record<string, any>>(
  WrappedComponent: React.ComponentType<P>,
) => (props: P): JSX.Element => (
  <JssProvider jss={jss}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <WrappedComponent {...props} />
  </JssProvider>
)

export { injectJss }
