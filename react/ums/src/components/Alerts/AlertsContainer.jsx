import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { alerts } from 'store/modules'
import Alerts from './alerts'

const { getVisibility, getNextAlert, getIsProcessingQueue } = alerts.selectors

const { show, hide, popAlert } = alerts.actions

const mapStateToProps = state => ({
  open: getVisibility(state),
  nextAlert: getNextAlert(state),
  isProcessingQueue: getIsProcessingQueue(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ show, hide, popAlert }, dispatch)

const AlertsContainer = connect(mapStateToProps, mapDispatchToProps)(Alerts)

export default AlertsContainer
