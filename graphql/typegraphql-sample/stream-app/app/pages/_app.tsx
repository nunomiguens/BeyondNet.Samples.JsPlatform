import React, { Component, useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'
import { themeLight, themeDark} from 'lib/theme'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "lib/apollo";
import { AuthProvider } from 'lib/useAuth';
import Header from 'components/Headers';

export default function MyApp({ Component, pageProps}) {
     
     const apolloClient = useApollo(pageProps.initialApolloState)
     const [darkState, setDarkState] = useState(false)

     const handleThemeChange = () => {
          setDarkState(!darkState)
     }

     useEffect(() => {
          //Remove the server-side injected CSS
          const jssStyles = document.querySelector('#jss-server-side')
          
          if (jssStyles && jssStyles.parentNode) {
               jssStyles.parentNode.removeChild(jssStyles)
          }
     },[])

     return (
       <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={darkState ? themeDark :  themeLight}> 
          <CssBaseline/>
          <AuthProvider>
               <Header darkState={darkState} handleThemeChange={handleThemeChange} />
               <Component {...pageProps} />
          </AuthProvider>
          </ThemeProvider>
       </ApolloProvider>
     )
}