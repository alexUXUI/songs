import {
  formatData,
  RockboxDataTransformer,
  karaokePalaceDataTransformer,
  SingALongADingDongDataTransformer,
  dateSortAscending
} from './song.logic'
import { RockSong, KaraokeData, SingALongSongs, Song } from '../songs.types'
import { FORMATTED_DATA } from '../songs.test.mocks'

describe('Song Logic Test Suite', () => {
  it('Should Transform the Song Data into a usable format', () => {
    const data = import('../Hook/songs.data')
    data.then(data => {
      expect({ songState: formatData(data) }).toStrictEqual(FORMATTED_DATA)
    })
  })

  it('Has a function to transform rock Karakoe Data', () => {
    const sampleRockBoxData: RockSong[] = [
      {
        first_name: 'April',
        last_name: 'Ludgate',
        song_name: 'Call Me Maybe',
        song_artist: 'Carly Rae Jepsen',
        song_time: '2019-01-01T22:15:00'
      }
    ]

    expect(RockboxDataTransformer(sampleRockBoxData)).toStrictEqual([
      {
        song: 'Call Me Maybe',
        artist: 'Carly Rae Jepsen',
        performer: `April Ludgate`,
        location: undefined,
        date: new Date('2019-01-01T22:15:00')
      }
    ])
  })

  it('Has a function to transform Karaoke Palace data', () => {
    const sampleKaraokeData: KaraokeData = [
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
      }
    ]

    expect(karaokePalaceDataTransformer(sampleKaraokeData)).toStrictEqual([
      {
        song: 'Wonderwall',
        artist: 'Oasis',
        performer: `Ben Wyatt`,
        location: undefined,
        date: new Date('2019-04-18T00:45:00')
      }
    ])
  })

  it('Has funciton for transforming Sing a Long Ding Dong Data', () => {
    const sampleSingalongData: SingALongSongs = [
      ['Song', 'Artist', 'Date', 'Performer'],
      ['Friends In Low Places', 'Garth Brooks', '2019-03-14T15:45:00', 'Ann Perkins']
    ]
    expect(SingALongADingDongDataTransformer(sampleSingalongData)).toStrictEqual([
      {
        song: 'Friends In Low Places',
        artist: 'Garth Brooks',
        performer: `Ann Perkins`,
        location: undefined,
        date: new Date('2019-03-14T15:45:00')
      }
    ])
  })

  it('Sort method sorts songs ascending', () => {
    const sampleUnsortedData: Song[] = [
      {
        song: 'Wonderwall',
        artist: 'Oasis',
        performer: `Ben Wyatt`,
        location: undefined,
        date: new Date('2019-04-18T00:45:00')
      },
      {
        song: 'Friends In Low Places',
        artist: 'Garth Brooks',
        performer: `Ann Perkins`,
        location: undefined,
        date: new Date('2019-03-14T15:45:00')
      }
    ]

    expect(sampleUnsortedData.sort(dateSortAscending)[0].song).toBe('Friends In Low Places')
  })
})
