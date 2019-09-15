import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
  // set up hook for location state
  const [locations, setLocations] = useState([])

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
    <div>
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
    </div>
  )
}
