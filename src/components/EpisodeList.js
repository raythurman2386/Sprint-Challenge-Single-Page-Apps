import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'

// Components
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  // set up hook for location state
  const [episodes, setEpisodes] = useState([])

  // Animation stretch
  const cardAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 800,
    config: config.gentle,
  })

  // set up the useEffect to grab the locations
  useEffect(() => {
    Axios
      // Get the data
      .get('https://rickandmortyapi.com/api/episode/')
      // Do something with the data
      .then(res => setEpisodes(res.data.results))
      // Do something with the error
      .catch(err => console.log(err))
  }, [])

  return (
    // map over the locations and send to the locationCard component
    <StyledSection className='character-list grid-view' style={cardAnimation}>
      {episodes &&
        episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
    </StyledSection>
  )
}

const StyledSection = styled(animated.section)``
