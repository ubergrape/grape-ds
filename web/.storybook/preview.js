import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withTests } from '@storybook/addon-jest'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ThemeProvider from '../src/styles'

import results from '../.jest-test-results.json'

// https://github.com/mthuret/storybook-addon-specifications/issues/119
configure({ adapter: new Adapter() })

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
addDecorator(withA11y())
addDecorator(
  withTests({
    results,
  }),
)

addParameters({
  options: {
    storySort: (a, b) => {
      if (b[1].kind === 'Welcome') return 1
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
    },
  },
})
