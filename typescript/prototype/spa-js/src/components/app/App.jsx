import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'

import { TheTopBar, TheNavBar } from '../layout'
import AuthContext from '../../context/auth'
import { UserSettingState } from '../../context/userSetting'
import AppTheme from '../ui/theme'
import { AppWrapper, Container, Main, TopBarSpace } from './styles'
import Routes from '../../routes'

const mockUserRole = {
  actions: {
    system: {
      viewSystem: true,
      viewList: true,
    },
  },
}

const mockEntity = 'system'

function App({ authContext }) {
  return (
    <AuthContext.Provider value={authContext}>
      <UserSettingState>
        <AppTheme>
          <AppWrapper>
            <Router>
              <TheTopBar />
              <TheNavBar />
              <Main>
                <TopBarSpace />
                <Container>
                  <Routes entity={mockEntity} userRole={mockUserRole} />
                </Container>
              </Main>
            </Router>
          </AppWrapper>
        </AppTheme>
      </UserSettingState>
    </AuthContext.Provider>
  )
}

App.propTypes = {
  authContext: PropTypes.instanceOf(Object).isRequired,
}

export default App
