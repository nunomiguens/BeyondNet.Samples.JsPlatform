import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/app/app'

const buildApp = () => {
  const store = require('store').default
  const Provider = require('react-redux').Provider
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(buildApp(), document.getElementById('root'))
