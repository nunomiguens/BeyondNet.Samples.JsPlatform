import { NotificationsType } from 'models'
import { createSelector } from 'reselect'

const NAME = 'notifications'
const STATUS_INACTIVE = 'Inactive'

const actionTypes = {
  FETCH: `${NAME}/FETCH`,
  SET: `${NAME}/SET`,
  ADD: `${NAME}/ADD`,
  UPDATE: `${NAME}/UPDATE`,
  MARK_AS_READ: `${NAME}/MARK_AS_READ`,
  DISABLE: `${NAME}/DISABLE`
}

const actions = {
  fetch: userName => ({
    type: actionTypes.FETCH,
    payload: { userName }
  }),
  set: (notifications, type) => ({
    type: actionTypes.SET,
    payload: { notifications },
    meta: { type }
  }),
  add: (notification, type) => ({
    type: actionTypes.ADD,
    payload: { notification },
    meta: { type }
  }),
  update: ({ id, updates, type }) => ({
    type: actionTypes.UPDATE,
    payload: { id, updates },
    meta: { type }
  }),
  markAsRead: (id, type) => ({
    type: actionTypes.MARK_AS_READ,
    payload: { id, updates: { read: true } },
    meta: { type }
  }),
  disable: (id, type) => ({
    type: actionTypes.DISABLE,
    payload: {
      id,
      updates: { status: STATUS_INACTIVE }
    },
    meta: { type }
  })
}

export const initialState = {
  fetching: false,
  [NotificationsType.User]: [],
  [NotificationsType.All]: []
}

const reducer = (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case actionTypes.SET:
      return {
        ...state,
        [meta.type]: [...state[meta.type], ...payload.notifications]
      }

    case actionTypes.ADD:
      return {
        ...state,
        [meta.type]: [
          payload.notification,
          ...state[meta.type].filter(
            (_, index) => index !== state[meta.type].length - 1
          )
        ]
      }

    case actionTypes.UPDATE:
      return {
        ...state,
        [meta.type]: state[meta.type].map(item =>
          item.id === payload.id ? { ...item, ...payload.updates } : item
        )
      }

    default:
      return state
  }
}

const getAllItems = state => state[NAME][NotificationsType.All]
const getUserItems = state => state[NAME][NotificationsType.User]
const getAllNotifications = createSelector(
  [getAllItems],
  all => all.filter(notification => notification.status !== STATUS_INACTIVE)
)
const getUserNotifications = createSelector(
  [getUserItems],
  userItems =>
    userItems.filter(notification => notification.status !== STATUS_INACTIVE)
)
const getNewUserNotificationsTotal = createSelector(
  [getUserNotifications],
  userNotifications =>
    userNotifications.filter(notification => !notification.read).length
)
const getNewAllNotificationsTotal = createSelector(
  [getAllNotifications],
  allNotifications =>
    allNotifications.filter(notification => !notification.read).length
)

const selectors = {
  getAllNotifications,
  getUserNotifications,
  getNewUserNotificationsTotal,
  getNewAllNotificationsTotal
}

const notifications = {
  namespace: NAME,
  initialState,
  actions,
  actionTypes,
  reducer,
  selectors
}

export default notifications
