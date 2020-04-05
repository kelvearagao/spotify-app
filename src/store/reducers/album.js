export const initialState = {
  isError: false,
  data: {}
}

const ALBUM_REQUEST = "ALBUM_REQUEST"
const ALBUM_REQUEST_SUCCESS = "ALBUM_REQUEST_SUCCESS"
const ALBUM_REQUEST_ERROR = "ALBUM_REQUEST_ERROR"
const ALBUM_CLEAN_STATE = "ALBUM_CLEAN_STATE"

export const ACTION_TYPES = {
  ALBUM_REQUEST,
  ALBUM_REQUEST_SUCCESS,
  ALBUM_REQUEST_ERROR,
  ALBUM_CLEAN_STATE
}

export const albumRequest = payload => ({
  type: ALBUM_REQUEST,
  payload
})

export const albumRequestSuccess = payload => ({
  type: ALBUM_REQUEST_SUCCESS,
  payload
})

export const albumRequestError = payload => ({
  type: ALBUM_REQUEST_ERROR,
  payload
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALBUM_REQUEST:
      return {
        ...state,
        isError: false
      }
    case ALBUM_REQUEST_SUCCESS:
      return {
        ...state,
        isError: false,
        data: {
          ...state.data,
          [payload.id]: {
            artist: payload.artists[0].name,
            name: payload.name,
            image: payload.images[0].url,
            items: payload.tracks.items
          }
        }
      }

    case ALBUM_REQUEST_ERROR:
      return {
        ...state,
        isError: true
      }

    default:
      return { ...state }
  }
}
