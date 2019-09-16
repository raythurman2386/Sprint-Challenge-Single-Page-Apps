import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard({ name, type, dimension, residents }) {
  // console.log(residents.length)
  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content description={type} />
      <Card.Content description={dimension} />
      <Card.Content extra>
        <Icon name='user' />
        Residents: {residents.length}
      </Card.Content>
    </Card>
  )
}
