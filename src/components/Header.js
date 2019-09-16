import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import SearchForm from './SearchForm'

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      <TabNav />
    </header>
  )
}

// Tab nav
function TabNav() {
  // Hook to set the active item
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  return (
    <div>
      <Menu pointing>
        <NavLink to='/'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
        </NavLink>
        <NavLink to='/characters'>
          <Menu.Item
            name='characters'
            active={activeItem === 'characters'}
            onClick={handleItemClick}
          />
        </NavLink>
        <NavLink to='/locations'>
          <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
            onClick={handleItemClick}
          />
        </NavLink>
        <NavLink to='/episodes'>
          <Menu.Item
            name='episodes'
            active={activeItem === 'episodes'}
            onClick={handleItemClick}
          />
        </NavLink>
        <Menu.Menu position='right'>
          <SearchForm />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
