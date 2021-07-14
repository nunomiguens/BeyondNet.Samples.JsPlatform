import React from 'react'
import { Container, Grid, TextField, Checkbox, Link } from '@material-ui/core'
import {
  FormStyled,
  FormControlLabelStyled,
  SignInButtonStyled,
  TitleSignUpStyled
} from './styles'

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <TitleSignUpStyled>SignUp</TitleSignUpStyled>
        <FormStyled noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabelStyled
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <SignInButtonStyled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </SignInButtonStyled>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="https://#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </FormStyled>
      </div>
    </Container>
  )
}

export default SignUp
