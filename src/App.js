import React from 'react'
import { Route } from 'react-router-dom'

// Components
import TabNav from './components/TabNav.js'
import Header from './components/Header.js'
import WelcomePage from './components/WelcomePage.js'

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
    </main>
  )
}
