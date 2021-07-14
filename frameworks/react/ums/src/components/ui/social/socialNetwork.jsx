import React from 'react'
import {
  Facebook as FacebookIcon,
  GitHub as GithubIcon,
  Mail as GMailIcon
} from '@material-ui/icons'

import { ButtonGroupStyled, ButtonStyled } from './styles'

const SocialNetwork = ({ orientation = 'horizontal' }) => {
  return (
    <ButtonGroupStyled orientation={orientation}>
      <ButtonStyled startIcon={<GMailIcon />}>Log In with Google</ButtonStyled>
      <ButtonStyled startIcon={<GithubIcon />}>Log In with GitHub</ButtonStyled>
      <ButtonStyled startIcon={<FacebookIcon />}>
        Log In with Facebook
      </ButtonStyled>
    </ButtonGroupStyled>
  )
}

export default SocialNetwork
