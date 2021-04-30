import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { notifications } from 'store/modules'
import Notifications from './notifications'

const {
  getAllNotifications,
  getUserNotifications,
  getNewUserNotificationsTotal,
  getNewAllNotificationsTotal
} = notifications.selectors

const { fetch, markAsRead, disable } = notifications.actions

const mapStateToProps = state => ({
  allNotifications: getAllNotifications(state),
  userNotifications: getUserNotifications(state),
  newUserNotificationsTotal: getNewUserNotificationsTotal(state),
  newAllNotificationsTotal: getNewAllNotificationsTotal(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { loadNotifications: fetch, markAsRead, disable },
    dispatch
  )

const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)

export default NotificationsContainer
