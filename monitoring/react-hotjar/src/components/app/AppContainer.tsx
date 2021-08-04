import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from '../app/App'
import { actions, selectors } from "../../store/modules/ui";

const { getEntity } = selectors

const { setEntity, setAuthorizations } = actions

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any) => ({
  entity: getEntity(state),
})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => 
bindActionCreators({
  setEntity,
  setAuthorizations,
}, dispatch)

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer