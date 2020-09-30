import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from '../../components/button'
import { ButtonGroupProps, ButtonGroup } from '../../components/button-group'

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
}

export const Base: React.FC<ButtonGroupProps> = props => (
  <ButtonGroup {...props}>
    <Button variant="primary">Button</Button>
    <Button>Button</Button>
    <Button appearance="minimal">Button</Button>
  </ButtonGroup>
)

Base.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=385%3A6',
  },
}

export const Alignment: React.FC<ButtonGroupProps> = () => (
  <div>
    <ButtonGroup>
      <Button variant="primary" onPress={action('clicked')}>
        Button
      </Button>
      <Button onPress={action('clicked')}>Button</Button>
      <Button appearance="minimal" onPress={action('clicked')}>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup align="right">
      <Button variant="primary" onPress={action('clicked')}>
        Button
      </Button>
      <Button onPress={action('clicked')}>Button</Button>
      <Button appearance="minimal" onPress={action('clicked')}>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup width={80} inline vertical>
      <Button variant="primary" onPress={action('clicked')}>
        Button
      </Button>
      <Button onPress={action('clicked')}>Button</Button>
      <Button appearance="minimal" onPress={action('clicked')}>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup vertical width={80} inline verticalAlign="bottom">
      <Button variant="primary" onPress={action('clicked')}>
        Button
      </Button>
      <Button onPress={action('clicked')}>Button</Button>
      <Button appearance="minimal" onPress={action('clicked')}>
        Button
      </Button>
    </ButtonGroup>
  </div>
)

Alignment.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=385%3A6',
  },
}
