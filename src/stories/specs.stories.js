import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { specs, describe, it } from 'storybook-addon-specifications'
import { shallow } from 'enzyme'
import expect from 'expect'
/* eslint-enable import/no-extraneous-dependencies */

const stories = storiesOf('Storybook Specifications', module)
stories.add('Default View', () => {
  const story = (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
  specs(() =>
    describe('Default View', () => {
      it('Should have the following text: 😀 😎 👍 💯', () => {
        const output = shallow(story)
        expect(output.text()).toContain('😀 😎 👍 💯')
      })
    }),
  )
  return story
})
