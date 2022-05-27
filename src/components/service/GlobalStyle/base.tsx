import { css } from 'styled-components'
import theme from '@/theme'

export default css`
  html,
  body,
  #__next {
    height: 100%;
  }
  
  body {
    color: ${theme.colors.body};
    font-family: ${theme.fonts.body};
    background-color: white;
    min-width: 320px;
  }
`
