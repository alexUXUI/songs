import * as React from 'react'
import { Song } from '../songs.types'

type SongItem = (props: { songItem: Song }) => JSX.Element

export const SongItem: SongItem = props => {
  const { song, artist, performer, location, date } = props.songItem
  return (
    <li className="song-list__item" data-testid="list-item">
      <h1 data-testid="list-item-song">{song || 'song title not specified'}</h1>
      <h2 data-testid="list-item-artist">{artist || 'artist not specified'}</h2>
      <h3 data-testid="list-item-performer">{performer || 'performer not specified'}</h3>
      <h4 data-testid="list-item-location">{location || 'location not specified'}</h4>
      <h5 data-testid="list-item-date">{date.toString().slice(0, 15) || 'date not specified'}</h5>
    </li>
  )
}
