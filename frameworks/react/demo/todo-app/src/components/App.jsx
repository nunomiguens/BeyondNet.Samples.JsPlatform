import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import { Container } from '@material-ui/core'


const App = () => (
  <Container maxWidth="sm">
    <Header />
    <MainSection />
  </Container>
)

export default App
