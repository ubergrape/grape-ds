import { JssStyle } from 'jss'

import tokens from '../../tokens'

export default ({
  overflowPadding,
  theme,
}: {
  overflowPadding: string
  theme: typeof tokens
}): Record<string, JssStyle | string> => ({
  height: '100%',
  '& .os-viewport': {
    paddingRight: overflowPadding,
  },
  '& .os-scrollbar-handle': {
    backgroundColor: '#C6C6C6 !important',
    width: [[theme.size1X], '!important'],
  },
  '& .os-scrollbar-handle.active': {
    backgroundColor: '#727272 !important',
  },
  '& .os-scrollbar': {
    padding: ['4px', '!important'],
    boxSizing: 'content-box !important',
  },
})
