export async function SetApp(app, isAuthorized, authContext) {
  app({ authContext: authContext, isAuthorized: isAuthorized })
}
