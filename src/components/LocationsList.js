import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Card, Icon } from 'semantic-ui-react'

export default function LocationsList() {
  // set up hook for location state
  const [locations, setLocations] = useState([])

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
      .get('https://rickandmortyapi.com/api/location/')
      // Do something with the data
      .then(res => setLocations(res.data.results))
      // Do something with the error
      .catch(err => console.log(err))
  }, [])

  return (
    // map over the locations and send to the locationCard component
    <StyledSection className='character-list grid-view' style={cardAnimation}>
      {locations &&
        locations.map(location => (
          <LocationCard
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
        ))}
    </StyledSection>
  )
}

const StyledSection = styled(animated.section)``

// Location Card Component
function LocationCard({ name, type, dimension, residents }) {
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
