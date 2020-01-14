import React from 'react'
import { render } from '@testing-library/react'
import { Songs } from './songs.component'

describe('Song list test Suite', () => {
  test('Songs Component Test', () => {
    const { getByTestId } = render(<Songs />)

    expect(getByTestId('song-list')).toBeInTheDocument()
  })
})
