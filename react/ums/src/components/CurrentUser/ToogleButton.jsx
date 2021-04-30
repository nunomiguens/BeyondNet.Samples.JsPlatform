import React from 'react'
import { StyledButton } from './styles'

const ToogleButton = () => (
  <>
    <StyledButton href="/signin" color="inherit">
      Login
    </StyledButton>
    <span>|</span>
    <StyledButton href="/signup" color="inherit">
      SignUp
    </StyledButton>
  </>
)

export default ToogleButton
