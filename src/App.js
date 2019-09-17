import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import Header from './components/Header.js'
import WelcomePage from './components/WelcomePage.js'
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList.js'
import EpisodeList from './components/EpisodeList.js'

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharacterList} />
        <Route path='/locations' component={LocationsList} />
        <Route path='/episodes' component={EpisodeList} />
      </Switch>
    </main>
  )
}
