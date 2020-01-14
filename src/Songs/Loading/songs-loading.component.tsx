import React from 'react'

type LoadingSkeleton = (numberOfCards: number) => JSX.Element[]

export const LoadingSkeleton: LoadingSkeleton = numberOfCards => {
  const loadingData: number[] = [...Array(numberOfCards).keys()]

  return loadingData.map(
    (number: number): JSX.Element => {
      return <li className="song-list__item--loading" key={number} data-testid={'loading-box'} />
    }
  )
}
