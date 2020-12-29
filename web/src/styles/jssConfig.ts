import { create, Jss } from 'jss'
import global from 'jss-plugin-global'
import extend from 'jss-plugin-extend'
import nested from 'jss-plugin-nested'
import expand from 'jss-plugin-expand'
import camel from 'jss-plugin-camel-case'
import unit from 'jss-plugin-default-unit'
import functions from 'jss-plugin-rule-value-function'

import fonts from '../fonts'
import { reset } from './reset'
import overwrites from './globalStyleOverwrites'

export default (isStylesNotReset: boolean): Jss => {
  const jss = create()

  jss.use(functions(), global(), extend(), nested(), camel(), unit(), expand())
  if (!isStylesNotReset) jss.createStyleSheet(reset).attach()
  jss.createStyleSheet(overwrites).attach()

  jss
    .createStyleSheet({
      ...fonts,
    })
    .attach()

  return jss
}
