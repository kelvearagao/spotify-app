export const initialState = {
  isError: false,
  data: {
    search: ''
  }
}

const SEARCH_REQUEST = 'SEARCH_REQUEST'
const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS'
const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR'

export const ACTION_TYPES = {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_ERROR
}

export const searchRequest = payload => ({
  type: SEARCH_REQUEST,
  payload
})

export const searchRequestSuccess = payload => ({
  type: SEARCH_REQUEST_SUCCESS,
  payload
})

export const searchRequestError = payload => ({
  type: SEARCH_REQUEST_ERROR,
  payload
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isError: false,
        data: {
          ...state.data,
          search: payload
        }
      }

    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        isError: false,
        data: {
          ...state.data,
          [state.data.search]: {
            items: payload.albums.items
          }
        }
      }

    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        isError: true
      }

    default:
      return { ...state }
  }
}
