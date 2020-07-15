import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { Welcome } from '@storybook/react/demo'
import { linkTo } from '@storybook/addon-links'
/* eslint-enable import/no-extraneous-dependencies */

export default { title: 'Welcome' }

export const welcome = () => <Welcome showApp={linkTo('Button')} />
