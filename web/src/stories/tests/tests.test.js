import React from 'react'
import renderer from 'react-test-renderer'

import { defaultView } from './tests.stories'

it('render correctly text component', () => {
  const defaultViewComponent = renderer.create(<defaultView />).toJSON()
  expect(defaultViewComponent).toMatchSnapshot()
})
