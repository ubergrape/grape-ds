import React from 'react'

import { TagsInput } from '../../components/tags-input'
import { Tag } from '../../components/tag'

export default {
  title: 'Forms/TagsInput',
  component: TagsInput,
}

export const Base: React.FC<TabsProps> = props => (
  <TagsInput onRemove={() => alert('Remove')} {...props}>
    <Tag
      id={1}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 1
    </Tag>
    <Tag
      id={2}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 2
    </Tag>
    <Tag
      id={3}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 3
    </Tag>
    <Tag
      id={4}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 1
    </Tag>
    <Tag
      id={5}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 2
    </Tag>
    <Tag
      id={6}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 3
    </Tag>
  </TagsInput>
)
