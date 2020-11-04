import React from 'react'

import { SpaceProps, Space } from '../../components/space'

export default {
  title: 'Utilities/Space',
  component: Space,
}

export const Base: React.FC<SpaceProps> = props => (
  <Space size={0} {...props}>
    Space component
  </Space>
)

export const Sizes: React.FC<SpaceProps> = () => (
  <div>
    <Space size={0}>Space component</Space>
    <Space size={1}>Space component</Space>
    <Space size={2}>Space component</Space>
    <Space size={3}>Space component</Space>
    <Space size={4}>Space component</Space>
    <Space size={5}>Space component</Space>
    <Space size={6}>Space component</Space>
    <Space size={7}>Space component</Space>
    <Space size={8}>Space component</Space>
  </div>
)
