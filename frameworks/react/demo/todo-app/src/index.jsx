import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './store/reducers'
import Theme from './plugins/material-ui'


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
     <Theme>  
        <App />      
      </Theme>
    </Provider>,
    document.getElementById('root')
)
