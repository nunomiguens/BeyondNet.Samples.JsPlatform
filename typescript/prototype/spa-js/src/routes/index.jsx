import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import { EntityType } from '../models'
import { NotFound } from '../pages'

const renderComponent = {
  [EntityType.System]: React.lazy(() => import('../pages/Systems')),
  [EntityType.User]: React.lazy(() => import('../pages/Users')),
  [EntityType.Profile]: React.lazy(() => import('../pages/Profiles')),
  [EntityType.Token]: React.lazy(() => import('../pages/Tokens')),
}

const Routes = ({ entity, userRole }) => {
  const render = (routeEntity) => () => {
    const { viewList } = userRole.actions[routeEntity.toLowerCase()] || {}
    if (entity !== routeEntity && viewList) {
      // clearAll()
      // setEntity(routeEntity)
    }

    const Component = renderComponent[routeEntity]

    return (
      <Suspense fallback={<div />}>
        {viewList ? <Component /> : <NotFound />}
      </Suspense>
    )
  }
  return (
    <Switch>
      <Route path="/systems/:id?" render={render(EntityType.System)} />
      <Redirect exact from="/" to="/systems/" />
      <Route component={NotFound} />
    </Switch>
  )
}

Routes.propTypes = {
  entity: PropTypes.string.isRequired,
  userRole: PropTypes.instanceOf(Object).isRequired,
}

export default Routes
