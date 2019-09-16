import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useSpring, animated, config } from 'react-spring'

// Components
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  // Animation stretch
  const cardAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 400,
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
    <section
      animated
      className='character-list grid-view'
      style={cardAnimation}
    >
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters &&
        characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
    </section>
  )
}
