import React, { Component } from 'react'

import Nav from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <Nav color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App
