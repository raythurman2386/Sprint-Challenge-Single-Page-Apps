import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Image src={character.image} alt={character.name} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          {character.species} {character.status}
        </Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>
  )
}
