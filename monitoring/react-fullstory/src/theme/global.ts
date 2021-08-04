import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {}
  #root {
    overflow: hidden;
  }
  kbd {
    background: #616161;
    color: #fff;
    display: inline-block;
    border-radius: 3px;
    white-space: pre-wrap;
    font-size: 85%;
    font-weight: 900;
    padding: 0px 4px;
  }
`
export default GlobalStyle
