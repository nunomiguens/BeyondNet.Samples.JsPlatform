const getStatus = status => {
  let value
  switch (status) {
    case 0:
      value = 'Inactive'
      break
    case 1:
      value = 'Active'
      break
    default:
      value = 'Active'
      break
  }
  return value
}

//TODO: Pending define audit scope
class User {
  constructor(user) {
    if (!user) return

    const {
      id,
      fullName,
      email,
      password,
      referenceKey,
      image,
      location,
      profiles,
      status
    } = user

    this.id = id
    this.fullName = fullName
    this.email = email
    this.password = password
    this.referenceKey = referenceKey
    this.image = image
    this.location = location
    this.profiles = profiles
    this.status = getStatus(status)
  }
}

export default User
