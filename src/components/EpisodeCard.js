import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function EpisodeCard({ episode }) {
  // console.log(episode)

  return (
    <Card>
      <Card.Content header={episode.name} />
      <Card.Content description={episode.air_date} />
    </Card>
  )
}
