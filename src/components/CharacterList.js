import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'

// Character List Component
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  // Animation stretch
  const cardAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 800,
    config: config.gentle,
  })

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err))
  }, [])

  // console.log(characters)

  return (
    <StyledSection className='character-list grid-view' style={cardAnimation}>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters &&
        characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
    </StyledSection>
  )
}

const StyledSection = styled(animated.section)``

// Character Card Component
function CharacterCard({ character }) {
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
