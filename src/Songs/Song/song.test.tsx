import React from 'react'
import { render } from '@testing-library/react'
import { SongItem } from './song.component'

const SAMPLE_DATA = {
  song: "comptine d'un autre été", // this song doesn't have any words but it is so good
  artist: 'Yann Tiersen',
  performer: 'Alex Bennett',
  location: undefined,
  date: '2001'
}

describe('Song Item Test Suite', () => {
  test('Songs Item should have the necessary markup', () => {
    const { getByTestId } = render(<SongItem songItem={SAMPLE_DATA} />)

    expect(getByTestId('list-item-song')).toBeInTheDocument()
    expect(getByTestId('list-item-artist')).toBeInTheDocument()
    expect(getByTestId('list-item-performer')).toBeInTheDocument()
    expect(getByTestId('list-item-location')).toBeInTheDocument()
    expect(getByTestId('list-item-date')).toBeInTheDocument()
  })

  test('If a field of the song data is missing, it should say "<field> not specified"', () => {
    const { getByTestId } = render(<SongItem songItem={SAMPLE_DATA} />)

    expect(getByTestId('list-item-location').textContent).toBe('location not specified')
  })
})
