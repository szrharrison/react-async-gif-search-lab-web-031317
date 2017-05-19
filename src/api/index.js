const publicAPIKey = 'dc6zaTOxFJmzC'

function searchGifs(term) {
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&limit=3&api_key=${publicAPIKey}`, {
      mode: 'cors',
      method: 'GET'
    }).then( response => response.json() ).then(json => json.data.map(image => {
      return image.images.original.url
    }))
}

export default searchGifs
