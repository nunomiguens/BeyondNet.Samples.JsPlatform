import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ISystemData } from '../context/auth/model'

import { EntityType } from '../models'
import { NotFound } from '../pages'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderComponent: any = {
  [EntityType.System]: React.lazy(() => import('../pages/Systems')),
  [EntityType.User]: React.lazy(() => import('../pages/Users')),
  [EntityType.Profile]: React.lazy(() => import('../pages/Profiles')),
  [EntityType.Token]: React.lazy(() => import('../pages/Tokens')),
  [EntityType.CustomEvent]: React.lazy(() => import('../pages/CustomEvents')),
  [EntityType.Funnel]: React.lazy(() => import('../pages/Funnels'))
}

interface RouteData {
  entity: string
  authorizations: ISystemData[]
  setEntity(entity: string): void
}

const Routes: React.FC<RouteData> = ({ entity, authorizations, setEntity }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const render = (routeEntity: string) => () => {
    const { Enabled }: ISystemData = authorizations.filter(
      (item) => item.Title.toLowerCase() === routeEntity.toLowerCase()
    )[0]

    if (Enabled && entity !== routeEntity) {
      //Do more things, clear, etc. It is pending
      setEntity(entity)
    }

    const Component = renderComponent[routeEntity]

    return (
      <Suspense fallback={<div />}>
        {Enabled ? <Component /> : <NotFound />}
      </Suspense>
    )
  }

  return (
    <Switch>
      <Route path="/systems/:id?" render={render(EntityType.System)} />
      <Route path="/users/:id?" render={render(EntityType.User)} />
      <Route path="/profiles/:id?" render={render(EntityType.Profile)} />
      <Route path="/tokens/:id?" render={render(EntityType.Token)} />
      <Route
        path="/customevents/:id?"
        render={render(EntityType.CustomEvent)}
      />
      <Route path="/funnels/:id?" render={render(EntityType.Funnel)} />
      <Redirect exact from="/" to="/systems/" />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
