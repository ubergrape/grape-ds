import { JssStyle } from 'jss'

import tokens from '../../tokens'

export default ({
  overflowPadding,
  theme,
}: {
  overflowPadding: number
  theme: typeof tokens
}): Record<string, JssStyle | string> => ({
  height: '100%',
  '& .os-viewport': {
    paddingRight: overflowPadding,
  },
  '& .os-scrollbar-handle': {
    backgroundColor: [[theme.colorBackgroundScrollbarHandle], '!important'],
    width: [[theme.size1X], '!important'],
  },
  '& .os-scrollbar-handle.active': {
    backgroundColor: [[theme.colorBackgroundScrollbarActive], '!important'],
  },
  '& .os-scrollbar': {
    padding: [[theme.sizeHalfX], '!important'],
    boxSizing: 'content-box !important',
  },
})
