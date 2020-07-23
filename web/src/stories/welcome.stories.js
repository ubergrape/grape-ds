import React from 'react'
import { Welcome } from '@storybook/react/demo'
import { linkTo } from '@storybook/addon-links'

export default { title: 'Welcome' }

export const welcome = () => <Welcome showApp={linkTo('Button')} />
