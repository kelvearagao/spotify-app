import { get } from 'utils/ajax'

export default query =>
  get(
    `${process.env.REACT_APP_SPOTIFY_API}/v1/search?q=${query}&type=album,artist,track`
  )
