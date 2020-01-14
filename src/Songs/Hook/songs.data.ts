import { RockSong, SingALongSongs, KaraokeData } from '../songs.types'

export const rockboxData: RockSong[] = [
  {
    first_name: 'April',
    last_name: 'Ludgate',
    song_name: 'Call Me Maybe',
    song_artist: 'Carly Rae Jepsen',
    song_time: '2019-01-01T22:15:00'
  },
  {
    first_name: 'Chris',
    last_name: 'Traeger',
    song_name: 'Head Like A Hole',
    song_artist: 'Nine Inch Nails',
    song_time: '2019-09-13T20:23:00'
  }
]

export const karaokePalaceData: KaraokeData = [
  {
    id: 6,
    name_first: 'Ben',
    name_last: 'Wyatt',
    song_list: [
      {
        song_name: 'Wonderwall',
        song_artist: 'Oasis',
        song_time: '2019-04-18T00:45:00'
      }
    ]
  },
  {
    id: 12,
    name_first: 'Donna',
    name_last: 'Meagle',
    song_list: [
      {
        song_name: 'Closer',
        song_artist: 'Tegan and Sarah',
        song_time: '2019-02-22T23:25:00'
      },
      {
        song_name: 'The Breeders',
        song_artist: 'Last Splash',
        song_time: '2019-10-09T19:49:00'
      }
    ]
  }
]

export const SingALongADingDongData: SingALongSongs = [
  ['Song', 'Artist', 'Date', 'Performer'],
  ['Friends In Low Places', 'Garth Brooks', '2019-03-14T15:45:00', 'Ann Perkins'],
  ["I'd Do Anything for Love", 'Meatloaf', '2019-08-12T19:11:00', 'Jerry Gergich'],
  ['Total Eclipse of the Heart', 'Bonnie Tyler', '2019-08-22T19:32:00', 'Leslie Knope']
]
