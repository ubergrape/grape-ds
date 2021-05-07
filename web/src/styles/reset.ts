import { Styles } from 'jss'

/**
 * JSS port of http://meyerweb.com/eric/tools/css/reset/
 */

export default (hasGlobalReset: boolean): Styles =>
  hasGlobalReset
    ? {
        '@global': {
          'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
            margin: '0',
            padding: '0',
            border: '0',
            fontSize: '100%',
            font: 'inherit',
            verticalAlign: 'baseline',
          },
          'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
            display: 'block',
          },
          body: {
            lineHeight: 1,
          },
          'ol, ul': {
            listStyle: 'none',
          },
          'blockquote, q': {
            quotes: 'none',
          },
          'blockquote:before, blockquote:after, q:before, q:after': {
            content: 'none',
          },
          table: {
            borderCollapse: 'collapse',
            borderSpacing: 0,
          },
        },
      }
    : {
        '#grape-client': {
          '& html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
            margin: '0',
            padding: '0',
            border: '0',
            fontSize: '100%',
            font: 'inherit',
            verticalAlign: 'baseline',
          },
          '& article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
            display: 'block',
          },
          '& body': {
            lineHeight: 1,
          },
          '& ol, ul': {
            listStyle: 'none',
          },
          '& blockquote, q': {
            quotes: 'none',
          },
          '& blockquote:before, blockquote:after, q:before, q:after': {
            content: 'none',
          },
          '& table': {
            borderCollapse: 'collapse',
            borderSpacing: 0,
          },
        },
      }
