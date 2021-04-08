import React from 'react'
import { Flex } from '../../components/layout'
import { ActionLink } from '../../components/action-link'

export default {
  title: 'Components/ActionLink',
  component: ActionLink,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=680%3A2484',
    },
  },
}

const Template = props => {
  return <ActionLink {...props} />
}
export const Base = Template.bind({})

Base.args = {
  children: 'Go to Google',
  href: 'https://google.at',
  target: '_blank',
}

export const Types = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <ActionLink href="#" variant="primary" title="Primary Link"/>
    <ActionLink href="#" variant="basic" title="Basic Link"/>
    <ActionLink href="#" variant="danger" title="Danger Link"/>
  </Flex>
)

export const Sizes = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <ActionLink href="#" size="regular" title="Regular Sized Link"/>
    <ActionLink href="#" size="small" title="Small Sized Link"/>
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <ActionLink href="#" variant="primary" isDisabled title="Primary Link"/>
    <ActionLink href="#" variant="basic" isDisabled title="Basic Link"/>
    <ActionLink href="#" variant="danger" isDisabled title="Danger Link"/>
  </Flex>
)
