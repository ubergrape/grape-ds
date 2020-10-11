import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { withTests } from '@storybook/addon-jest'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import ThemeProvider from '../src/styles'

import results from '../.jest-test-results.json'

// https://github.com/mthuret/storybook-addon-specifications/issues/119
configure({ adapter: new Adapter() })

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
addDecorator(
  withTests({
    results,
  }),
)
addDecorator(withDesign())

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

addParameters({
  docs: {
    page: DocsPage,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider>{children}</ThemeProvider>
      </DocsContainer>
    ),
  },
})

export const parameters = {
  controls: { expanded: true },
  layout: 'centered',
}
