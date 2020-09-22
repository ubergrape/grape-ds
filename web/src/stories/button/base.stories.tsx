import React from 'react'
import { Button } from '../../components/button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' }, children: { control: 'text' } },
}

const Template = props => {
  return <Button {...props} />
}
export const Base = Template.bind({})
Base.args = {
  children: 'Button',
}

export const Types: React.FC = () => (
  <div>
    <Button>Button</Button>
    <Button appearance="minimal">Button</Button>

    <Button variant="primary">Button</Button>
    <Button appearance="minimal" variant="primary">
      Button
    </Button>
    <Button variant="danger">Button</Button>
    <Button appearance="minimal" variant="danger">
      Button
    </Button>
  </div>
)

export const Disabled: React.FC = () => (
  <div>
    <Button disabled>Button</Button>
    <Button appearance="minimal" disabled>
      Button
    </Button>
  </div>
)

export const WithIcon: React.FC = () => (
  <div>
    <Button icon="arrowLeft">Button</Button>
    <Button appearance="minimal" icon="arrowLeft">
      Button
    </Button>
    <Button icon="people" iconPosition="right">
      Button
    </Button>
    <Button appearance="minimal" icon="people" iconPosition="right">
      Button
    </Button>
  </div>
)

export const IconButton: React.FC = () => (
  <div>
    <Button icon="person" ariaLabel="Person Icon" />
    <Button
      icon="person"
      appearance="minimal"
      ariaLabel="Minimal Person Icon"
    />
  </div>
)

export const Sizes: React.FC = () => (
  <div>
    <Button size="regular">Button</Button>
    <Button size="regular" appearance="minimal">
      Button
    </Button>
    <Button size="small">Button</Button>
    <Button size="small" appearance="minimal">
      Button
    </Button>
  </div>
)
