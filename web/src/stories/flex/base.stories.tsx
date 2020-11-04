import React from 'react'

import { FlexProps, Flex } from '../../components/layout'

export default {
  title: 'Utilities/Flex',
  component: Flex,
}

export const Base: React.FC<FlexProps> = props => (
  <Flex size={0} {...props}>
    <div>Space component</div>
  </Flex>
)

export const Sizes: React.FC<FlexProps> = () => (
  <div>
    <Flex gap="0">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="0.5x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="1x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="1.5x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="2x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="2.5x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="3x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="4x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="5x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
    <Flex gap="6x">
      <div>Space component</div>
      <div>Space component 2</div>
    </Flex>
  </div>
)
