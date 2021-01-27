import { JssStyle } from 'jss'

export default (
  overflowPadding: string,
): Record<string, JssStyle | string> => ({
  height: '100%',
  '& .os-viewport': {
    paddingRight: overflowPadding,
  },
  '& .os-scrollbar-handle': {
    backgroundColor: '#C6C6C6 !important',
    width: '8px !important',
  },
  '& .os-scrollbar-handle.active': {
    backgroundColor: '#727272 !important',
  },
  '& .os-scrollbar': {
    padding: '4px !important',
    boxSizing: 'content-box !important',
  },
})
