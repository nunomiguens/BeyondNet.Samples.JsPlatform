class Notification {
  constructor(rawNotification) {
    if (!rawNotification) return

    this.id = rawNotification.Id
  }
}
export default Notification