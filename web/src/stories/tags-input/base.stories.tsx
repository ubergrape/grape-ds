import React from 'react'

import { TagsInput } from '../../components/tags-input'
import { Tag } from '../../components/tag'

export default {
  title: 'Forms/TagsInput',
  component: TagsInput,
}

export const Base: React.FC<TabsProps> = props => (
  <TagsInput {...props}>
    <Tag
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 1
    </Tag>
    <Tag
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 2
    </Tag>
    <Tag
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 3
    </Tag>
    <Tag
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 1
    </Tag>
    <Tag
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 2
    </Tag>
    <Tag
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 3
    </Tag>
  </TagsInput>
)
