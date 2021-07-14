import React from 'react'
import { Container, TextField, Checkbox, Grid, Link } from '@material-ui/core'

import useForm from 'hooks/useForm'
import { SocialNetwork } from 'components/ui'
import {
  FormStyled,
  FormControlLabelStyled,
  SignInButtonStyled,
  TitleSignInStyled
} from './styles'
import { usersRepository } from 'api'

const SignIn = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  )

  const handleRememberMe = () => {}

  const handleSignIn = async () => {
    debugger

    const data = usersRepository.getAll().then(response => {
      return response
    })

    console.log(data)

    // setFormData(
    //   { ...formState.inputs, name: { value: '', isValid: false } },
    //   false
    // )
    // const isValid = new AuthService().SignIn(
    //   formState.inputs.email.value,
    //   formState.inputs.password.value
    // )
    // isValid && console.log('Logged')
  }

  return (
    <Container maxWidth="sm">
      <SocialNetwork />
      <TitleSignInStyled>Sign In</TitleSignInStyled>
      <FormStyled method="POST" onSubmit={handleSignIn}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onInput={inputHandler}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          onInput={inputHandler}
        />
        <FormControlLabelStyled
          control={<Checkbox value="remenber" color="primary" />}
          label="Remember me"
          onChange={handleRememberMe}
        />
        <SignInButtonStyled
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          SignIn
        </SignInButtonStyled>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item>
            <Link href="/forgot" variant="body2">
              Forgot Password
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              Do not have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </FormStyled>
    </Container>
  )
}

export default SignIn
