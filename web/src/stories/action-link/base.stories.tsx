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
    <ActionLink href="#" variant="primary">
      Primary Link
    </ActionLink>
    <ActionLink href="#" variant="basic">
      Basic Link
    </ActionLink>
    <ActionLink href="#" variant="danger">
      Danger Link
    </ActionLink>
  </Flex>
)

export const Sizes = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <ActionLink href="#" size="regular">
      Regular Link
    </ActionLink>
    <ActionLink href="#" size="small">
      Small Link
    </ActionLink>
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <ActionLink href="#" variant="primary" isDisabled>
      Primary Link
    </ActionLink>
    <ActionLink href="#" variant="basic" isDisabled>
      Basic Link
    </ActionLink>
    <ActionLink href="#" variant="danger" isDisabled>
      Danker Link
    </ActionLink>
  </Flex>
)
