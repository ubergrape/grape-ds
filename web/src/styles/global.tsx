import { Styles } from 'jss'

export default (hasGlobalOverrides: boolean): Styles =>
  hasGlobalOverrides
    ? {
        '@global': {
          'input[type=search]::-ms-clear, input[type=search]::-ms-reveal ': {
            display: 'none',
            width: 0,
            height: 0,
          },
          'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration': {
            display: 'none',
          },
          '*': {
            scrollbarWidth: '8px',
            scrollbarColor: '#c6c6c6 transparent',
          },
          '*::-webkit-scrollbar': {
            width: '8px',
          },
          '*::-webkit-scrollbar-track': {
            background: 'transparent',
            margin: '0 30px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#c6c6c6',
            borderRadius: 20,
            border: '3px solid transparent',
          },
        },
      }
    : {
        '#grape-client': {
          '& input[type=search]::-ms-clear, input[type=search]::-ms-reveal ': {
            display: 'none',
            width: 0,
            height: 0,
          },
          '& input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration': {
            display: 'none',
          },
          '& *': {
            scrollbarWidth: '8px',
            scrollbarColor: '#c6c6c6 transparent',
          },
          '& *::-webkit-scrollbar': {
            width: '8px',
          },
          '& *::-webkit-scrollbar-track': {
            background: 'transparent',
            margin: '0 30px',
          },
          '& *::-webkit-scrollbar-thumb': {
            backgroundColor: '#c6c6c6',
            borderRadius: 20,
            border: '3px solid transparent',
          },
        },
      }
