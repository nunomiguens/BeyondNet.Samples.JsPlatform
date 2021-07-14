import React, { Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import { HomePage, NotFoundPage, PrivatePage, PublicPage } from 'pages'
import { EntityType } from 'models'
import {
  Callback,
  Logout,
  LogoutCallback,
  SilentRenew,
  SignIn,
  SignUp
} from 'components/auth'
import { PrivateRoute } from './privateRoute'

import TestPage from 'components/test/testPage'

const renderComponent = {
  [EntityType.User]: lazy(() => import('../pages/users')),
  [EntityType.SignIn]: lazy(() => import('../components/auth/signin')),
  [EntityType.SignUp]: lazy(() => import('../components/auth/signup')),
  [EntityType.TestPage]: lazy(() => import('../components/test/testPage'))
}

const setEntity = () => {}

const clearAll = () => {}

const Routes = ({ entity, setEntity, clearAll }) => {
  const render = routeEntity => () => {
    if (entity !== routeEntity) {
      //clearAll()
      //setEntity(routeEntity)
    }

    const Component = renderComponent[routeEntity]

    return (
      <Suspense fallback={<div />}>
        <Component />
      </Suspense>
    )
  }

  return (
    <Switch>
      <Route exact component={TestPage} path="/" />
      <Route exact={true} path="/signin-oidc" component={Callback} />
      <Route exact={true} path="/logout" component={Logout} />
      <Route exact={true} path="/logout/callback" component={LogoutCallback} />
      <Route exact={true} path="/register" component={SignUp} />
      <Route exact={true} path="/silentrenew" component={SilentRenew} />
      <PrivateRoute path="/dashboard" component={PrivatePage} />
      <Route path="/" component={PublicPage} />
      <Route path="/users/:id?" render={render(EntityType.User)} />
      <Route path="/signin" render={render(EntityType.SignIn)} />
      <Route path="/signup" render={render(EntityType.SignUp)} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

// <Route path="/" component={PublicPage} />

Routes.defaultProps = {
  entity: null
}

Routes.propTypes = {
  entity: PropTypes.string
}

export default Routes
