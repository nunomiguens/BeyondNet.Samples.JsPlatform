import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthDataContext } from '../../context/auth'
import { UserSettingState} from '../../context/userSetting';
import { AppWrapper, Container, Main, TopBarSpace } from './styles'
import AppTheme from '../ui/theme';
import Routes from '../../routes'
import TheTopBar from '../layout/TheTopBar';
import TheNavBar from '../layout/TheNavBar';
import { AppData } from '../../models';

const App: React.FC<AppData> = (appData: AppData) => {

  const {entity, authContext, setAuthorizations, authorizations, setEntity } = appData
  
  useEffect(() => {
    setAuthorizations(authorizations)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 return (
 <AuthDataContext.Provider value={authContext}>
    <UserSettingState>
      <AppTheme>
        <AppWrapper>
        <Router>
              <TheTopBar /> 
              <TheNavBar pages={authorizations} />
              <Main isMiniNavBar>
                <TopBarSpace />
                <Container>
                  <Routes entity={entity} authorizations={authorizations} setEntity={setEntity} />
                </Container>
              </Main>
            </Router>
        </AppWrapper>
      </AppTheme>
    </UserSettingState>
  </AuthDataContext.Provider>
 )};

export default App
