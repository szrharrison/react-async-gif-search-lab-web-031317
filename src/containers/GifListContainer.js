import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import searchGifs from '../api'

class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }

  getGifs(query) {
    searchGifs(query).then( gifArray => {
      this.setState({
        gifs: gifArray
      })
    })

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <GifList gifs={this.state.gifs} />
          <GifSearch onSubmit={this.getGifs.bind(this)}/>
        </div>
      </div>
    )
  }
}


export default GifListContainer
