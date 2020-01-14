import React from 'react'
import { Songs } from '../Songs/songs.component'

export const App: React.SFC = (): JSX.Element => (
  <main className="App" data-testid="app">
    <Songs />
  </main>
)
