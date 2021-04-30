class NotificationItem {
  constructor(rawNotification) {
    if (!rawNotification) return

    this.id = rawNotification.id
  }
}
export default NotificationItem
