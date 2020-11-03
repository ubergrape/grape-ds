import React from 'react'

import { SpaceProps, Space } from '../../components/space'

export default {
  title: 'Utilities/Space',
  component: Space,
}

export const Base: React.FC<SpaceProps> = props => (
  <Space size="size-half-x" {...props}>
    Space component
  </Space>
)

export const Sizes: React.FC<SpaceProps> = () => (
  <div>
    <Space size="size-half-x">Space component</Space>
    <Space size="size-1-x">Space component</Space>
    <Space size="size-1-half-x">Space component</Space>
    <Space size="size-2-x">Space component</Space>
    <Space size="size-2-half-x">Space component</Space>
    <Space size="size-3-x">Space component</Space>
    <Space size="size-4-x">Space component</Space>
    <Space size="size-5-x">Space component</Space>
    <Space size="size-6-x">Space component</Space>
  </div>
)
