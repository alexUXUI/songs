import * as React from 'react'
import { useSongData } from './Hook/songs.hook'
import { LoadingSkeleton } from './Loading/songs-loading.component'
import { Song } from './songs.types'
import { SongItem } from './Song/song.component'

export const Songs = (): JSX.Element => {
  const { songState } = useSongData()
  return (
    <ul className="song-list" data-testid="song-list">
      {songState !== undefined ? (
        songState && songState.length ? (
          songState.map(
            (song: Song): JSX.Element => (
              <SongItem songItem={song} key={`${song.artist}-${song.performer}-${song.date}`} />
            )
          )
        ) : (
          LoadingSkeleton(3)
        )
      ) : (
        <span>no data</span>
      )}
    </ul>
  )
}
