import ReactDOM from 'react-dom'

import { Credentials, AppData } from './models'
import { Unauthorized } from './pages'
import { Provider } from 'react-redux'
import store from './store'
import auth from './services/auth'
import { AppContainer } from './components/app'

const mockAppData = new AppData(
  auth({
    UserName: 'beto',
    Password: 'beto'
  } as Credentials)
)

function buildApp(appData: AppData) {
  return (
    <Provider store={store}>
      <AppContainer {...appData} />
    </Provider>
  )
}

buildApp(mockAppData)

const { IsAuthenticated } = mockAppData.authContext.User

ReactDOM.render(
  IsAuthenticated ? buildApp(mockAppData) : <Unauthorized />,
  document.getElementById('root')
)
