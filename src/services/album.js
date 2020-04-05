import { get } from "utils/ajax"

export default id => get(`${process.env.REACT_APP_SPOTIFY_API}/v1/albums/${id}`)
