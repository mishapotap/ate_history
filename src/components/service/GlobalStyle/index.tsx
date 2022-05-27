import { createGlobalStyle } from 'styled-components'
import modernNormalize from './modernNormalize'
import myReset from './myReset'

import base from './base'
import typography from './typography'

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  ${myReset}
  ${base}
  ${typography}
`
export default GlobalStyle
