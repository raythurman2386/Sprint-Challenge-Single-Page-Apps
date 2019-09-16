import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Image src={character.image} alt={character.name} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          {character.species} {character.status}
        </Card.Meta>
        <Card.Description>Origin: {character.origin.name}</Card.Description>
        <Card.Description>Location: {character.location.name}</Card.Description>
      </Card.Content>
    </Card>
  )
}
