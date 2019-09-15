import React, { useState } from 'react'
import { Input, Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  // Hook to set the active item
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = e => {
    setActiveItem(e.target.name)
  }

  return (
    <div>
      <Menu pointing>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='characters'
          active={activeItem === 'characters'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='episodes'
          active={activeItem === 'episodes'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}
