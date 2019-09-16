import React, { useState } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState('')

  const handleInputChange = () => {}

  return (
    <section className='search-form'>
      <form onSubmit={() => onSearch(name)}>
        <Menu.Item>
          <Input
            name='name'
            icon='search'
            placeholder='Search...'
            value={name}
            onChange={handleInputChange}
          />
        </Menu.Item>
      </form>
    </section>
  )
}
