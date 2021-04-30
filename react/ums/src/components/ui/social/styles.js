import styled from 'styled-components'
import { ButtonGroup, Button } from '@material-ui/core'

export const ButtonGroupStyled = styled(ButtonGroup)`
  display: flex;
  justify-content: center;
  padding: 5px 5px 20px 5px;
  & > * {
    font-size: 10px;
  }
`

export const ButtonStyled = styled(Button)``
