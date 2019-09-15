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
      .get()
      // Do something with the data
      .then()
      // Do something with the error
      .catch()
  }, [])

  return (
    // map over the locations and send to the locationCard component
    <div>
      {locations &&
        locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
    </div>
  )
}
