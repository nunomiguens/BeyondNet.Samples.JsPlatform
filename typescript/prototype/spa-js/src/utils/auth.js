export function getGraphToken(authContext) {
  // return new Promise((resolve, reject) => {
  //   authContext.acquireToken(
  //     process.env.REACT_APP_GRAPH_URL,
  //     (message, token, msg) =>
  //       !msg ? resolve(token) : reject(new Error({ message, msg }))
  //   )
  // })
}

export function addAxiosInterceptor(authContext) {
  // axios.interceptors.request.use(
  //   async config => {
  //     const token = await adalGetToken(
  //       authContext,
  //       process.env.REACT_APP_AZURE_AD_APP_GATEWAY_ID
  //     )
  //     if (token) {
  //       // eslint-disable-next-line no-param-reassign
  //       config.headers.Authorization = `Bearer ${token}`
  //       // eslint-disable-next-line no-param-reassign
  //       config.headers.AppName = 'Francis'
  //     }
  //     return config
  //   },
  //   err => Promise.reject(err)
  // )
}

async function getRole({ authIds }) {
  // const response = await configurationsRepository.findPermissions()
  // const authenticationGroupId =
  //   process.env.REACT_APP_AZURE_AUTHENTICATION_GROUP_ID
  // const roleId = authIds?.filter((x) => x !== authenticationGroupId)
  // const role = response?.filter((x) => x.azureGroupId === roleId[0])
  // return role ? role[0] : null
}

export async function SetApp(app, isAuthorized, authContext, authIds) {
  // if (isAuthorized) addAxiosInterceptor(authContext)

  // const role = await getRole({ authIds })

  // eslint-disable-next-line no-param-reassign
  // if (!role) isAuthorized = false

  app({ authContext, isAuthorized: true, userRole: {} })
}
