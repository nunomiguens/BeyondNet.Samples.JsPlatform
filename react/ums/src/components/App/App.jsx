import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routes'
import { Main, AppWrapper, TopBarSpace, Container } from './styles'
import { AppThemeProvider } from 'theme'
import { TheTopBar, TheNavBar, TheFooter } from 'components/layout'
import { UserSettingsState } from 'context/userSettings'
import { AlertsContainer } from 'components/alerts'
import AuthProvider from 'components/auth/authProvider'

const App = () => {
  return (
    // <AuthProvider>
    <UserSettingsState>
      <AppThemeProvider>
        <AppWrapper>
          <Router>
            <TheTopBar />
            <TheNavBar />
            <Main>
              <TopBarSpace />
              <Container>
                <Routes />
                <AlertsContainer />
              </Container>
              <TheFooter />
            </Main>
          </Router>
        </AppWrapper>
      </AppThemeProvider>
    </UserSettingsState>
    // </AuthProvider>
  )
}

export default App
