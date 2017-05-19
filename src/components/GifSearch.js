import React, { Component } from 'react'

class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitSearchTerm(event) {
    event.preventDefault()

    this.props.onSubmit(this.state.searchTerm)
  }

  render() {
    return (
      <div className="col-md-4">
        <form onSubmit={this.submitSearchTerm.bind(this)}>
          <div className="form-group">
            <label>Search: <input className="form-control" type="text" onChange={this.handleSearchTerm.bind(this)} /></label>
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
