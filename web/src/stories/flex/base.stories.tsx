import React from 'react'

import { FlexProps, Flex } from '../../components/layout'

export default {
  title: 'Utilities/Flex',
  component: Flex,
}

const Box = () => (
  <div style={{ backgroundColor: 'lightgray', height: 20, width: 20 }} />
)

export const Base: React.FC<FlexProps> = props => (
  <Flex gap="0.5x" {...props}>
    <Box />
    <Box />
  </Flex>
)

export const Column: React.FC<FlexProps> = () => (
  <Flex direction="row">
    <Flex direction="column" gap="0x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="0.5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="1x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="1.5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="2x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="2.5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="3x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="4x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="column" gap="6x">
      <Box />
      <Box />
    </Flex>
  </Flex>
)

export const Row: React.FC<FlexProps> = () => (
  <Flex direction="column">
    <Flex direction="row" gap="0x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="0.5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="1x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="1.5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="2x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="2.5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="3x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="4x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="5x">
      <Box />
      <Box />
    </Flex>
    <Flex direction="row" gap="6x">
      <Box />
      <Box />
    </Flex>
  </Flex>
)

export const FlexWrap: React.FC<FlexProps> = () => (
  <div style={{ maxWidth: 20 * 4 + 8 * 3 }}>
    <Flex gap="1x" wrap="wrap">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Flex>
  </div>
)
