import React from 'react'
import { create } from 'jss'
import global from 'jss-plugin-global'
import extend from 'jss-plugin-extend'
import nested from 'jss-plugin-nested'
import expand from 'jss-plugin-expand'
import camel from 'jss-plugin-camel-case'
import unit from 'jss-plugin-default-unit'
import functions from 'jss-plugin-rule-value-function'
import { JssProvider } from 'react-jss'

import fonts from '../fonts'

const jss = create()

jss.use(functions(), global(), extend(), nested(), camel(), unit(), expand())

jss
  .createStyleSheet({
    '@global': {
      ...fonts,
    },
  })
  .attach()

const injectJss = <P extends Record<string, any>>(
  WrappedComponent: React.ComponentType<P>,
) => (props: P): JSX.Element => (
  <JssProvider jss={jss}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <WrappedComponent {...props} />
  </JssProvider>
)

export { injectJss }
