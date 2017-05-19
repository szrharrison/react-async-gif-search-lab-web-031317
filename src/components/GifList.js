import React from 'react'

function GifList(props) {
  return (
    <div className="col-md-8">
      <ul>
        {props.gifs.map( (gif, i) => {
          return (
            <li key={i}>
              <img src={gif} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GifList
