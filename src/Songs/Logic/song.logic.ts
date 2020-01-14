import { Song, KaraokeSong, RockSong, SingALongSongs, InputData, KaraokeData } from '../songs.types'

export const RockboxDataTransformer = (songs: RockSong[]): Song[] => {
  return songs.reduce((acc: Song[], song: RockSong): Song[] => {
    return acc.concat({
      song: song.song_name,
      artist: song.song_artist,
      performer: `${song.first_name} ${song.last_name}`,
      location: undefined,
      date: new Date(song.song_time)
    })
  }, [])
}

export const karaokePalaceDataTransformer = (songs: KaraokeData): Song[] => {
  return songs
    .map((song): Song[] => {
      return song.song_list.map(
        (personsSong: KaraokeSong): Song => ({
          song: personsSong.song_name,
          artist: personsSong.song_artist,
          date: new Date(personsSong.song_time),
          location: undefined,
          performer: `${song.name_first} ${song.name_last}`
        })
      )
    })
    .flat()
}

export const SingALongADingDongDataTransformer = (songs: SingALongSongs): Song[] => [
  ...songs.slice(1).map(
    (song: string[]): Song => ({
      song: song[0],
      artist: song[1],
      performer: song[3],
      location: undefined,
      date: new Date(song[2])
    })
  )
]

export const formatData = (songs: InputData): Song[] => {
  return Object.keys(songs)
    .reduce((acc: Song[], collection: string): Song[] => {
      if (collection === 'rockboxData') {
        return acc.concat(RockboxDataTransformer(songs[collection]))
      } else if (collection === 'karaokePalaceData') {
        return acc.concat(karaokePalaceDataTransformer(songs[collection]))
      } else if (collection === 'SingALongADingDongData') {
        return acc.concat(SingALongADingDongDataTransformer(songs[collection]))
      }
      return acc
    }, [])
    .sort(dateSortAscending)
}

export const dateSortAscending = (songOne: Song, songTwo: Song) =>
  songOne.date.getTime() - songTwo.date.getTime()
