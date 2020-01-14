export type Song = {
  song: string
  artist: string
  performer: string
  location: string | undefined
  date: Date
}

export type KaraokeData = {
  id: number
  name_first: string
  name_last: string
  song_list: {
    song_name: string
    song_artist: string
    song_time: string
  }[]
}[]

export type KaraokePerformer = {
  id: number
  name_first: string
  name_last: string
  location?: string
}

export type KaraokeSong = {
  song_name: string
  song_artist: string
  song_time: string
}

export type RockSong = {
  first_name: string
  last_name: string
  song_name: string
  song_artist: string
  song_time: string
}

export type SingALongSongs = string[][]

export type InputData = {
  rockboxData: RockSong[]
  karaokePalaceData: KaraokeData
  SingALongADingDongData: SingALongSongs
}
