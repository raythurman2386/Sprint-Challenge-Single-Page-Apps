import React, { useEffect, useState } from 'react'
import Axios from 'axios'

// Components
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  // set up hook for location state
  const [episodes, setEpisodes] = useState([])

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
    <section className='character-list grid-view'>
      {episodes &&
        episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
    </section>
  )
}
