import * as React from 'react'
import { render } from '@testing-library/react'
import { LoadingSkeleton } from './songs-loading.component'

describe('Loading Test Suite', () => {
  test('It should have the correct number of loading boxes', () => {
    const { getAllByTestId } = render(<>{LoadingSkeleton(3)}</>)

    expect(getAllByTestId('loading-box').length).toBe(3)
  })
})
