import * as React from 'react'
import { Song } from '../songs.types'
import { formatData } from '../Logic/song.logic'

const getData = () => import('./songs.data')

export function useSongData(): { songState: Song[] | undefined } {
  const [songState, setSongState] = React.useState<Song[] | undefined>([])

  React.useEffect(() => {
    if (!songState || !songState.length) {
      getData()
        .then(songs => {
          // this set timeout is only here to simulate network latency
          // so that the reviewer can see the loading state of the list
          setTimeout(() => {
            setSongState(formatData(songs))
          }, 1000)
        })
        .catch((error: Error) => {
          // errorHandler(error) => Sentry, trigger warning message, etc.
          setSongState(undefined)
        })
    }
  })

  return { songState }
}
