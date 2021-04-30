import styled from 'styled-components'
import { FormControlLabel, Button, Typography } from '@material-ui/core'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormControlLabelStyled = styled(FormControlLabel)`
  & > * {
    font-size: 12px;
  }
`

export const SignInButtonStyled = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const TitleStyled = styled(Typography)`
  font-size: 25px;
`

export const TitleSignInStyled = styled(TitleStyled)`
  padding: 5px 0px 5px 0px;
`
export const TitleSignUpStyled = styled(TitleStyled)`
  padding: 5px 0px 20px 0px;
`
