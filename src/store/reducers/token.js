export const initialState = {
  requestToken: false
}

const TOKEN_REQUEST = 'TOKEN_REQUEST'
const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS'
const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR'

export const ACTION_TYPES = {
  TOKEN_REQUEST,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_ERROR
}

export const tokenRequest = () => ({
  type: TOKEN_REQUEST
})

export const tokenRequestSuccess = () => ({
  type: TOKEN_REQUEST_SUCCESS
})

export const tokenRequestError = () => ({
  type: TOKEN_REQUEST_ERROR
})

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case TOKEN_REQUEST:
      return {
        requestToken: true
      }

    case TOKEN_REQUEST_SUCCESS:
      return {
        requestToken: false
      }

    case TOKEN_REQUEST_ERROR:
      return {
        requestToken: true
      }

    default:
      return {
        ...state
      }
  }
}

export default reducer
