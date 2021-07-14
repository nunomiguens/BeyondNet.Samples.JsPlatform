import { bindActionCreators } from 'components/app/node_modules/redux'
import { connect } from 'components/app/node_modules/react-redux'

import { ui } from 'components/app/node_modules/store/modules'
import App from './app'

const { getEntity } = ui.selectors
const { setEntity, clearAll } = ui.actions

const mapStateToProps = state => ({
  entity: getEntity(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setEntity,
      clearPreviousEntityState: clearAll
    },
    dispatch
  )

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
