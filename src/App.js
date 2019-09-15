import React from 'react'
import { Route } from 'react-router-dom'

// Components
import TabNav from './components/TabNav.js'
import Header from './components/Header.js'
import WelcomePage from './components/WelcomePage.js'
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList.js'

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
    </main>
  )
}
