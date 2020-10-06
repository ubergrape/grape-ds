import { create } from 'jss'
import global from 'jss-plugin-global'
import extend from 'jss-plugin-extend'
import nested from 'jss-plugin-nested'
import expand from 'jss-plugin-expand'
import camel from 'jss-plugin-camel-case'
import unit from 'jss-plugin-default-unit'
import functions from 'jss-plugin-rule-value-function'

import fonts from '../fonts'
import { reset } from './reset'

const jss = create()

jss.use(functions(), global(), extend(), nested(), camel(), unit(), expand())

jss.createStyleSheet(reset).attach()
jss
  .createStyleSheet({
    ...fonts,
  })
  .attach()

export default jss
