import React from 'react'
import { Route } from 'react-router-dom'

// Components
import TabNav from './components/TabNav.js'
import Header from './components/Header.js'
import WelcomePage from './components/WelcomePage.js'
import CharacterList from './components/CharacterList'

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  )
}
