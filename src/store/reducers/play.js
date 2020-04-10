export const initialState = {
  data: {
    artist: '',
    musicName: '',
    previewUrl: '',
    index: undefined,
    items: []
  }
}

const PLAY_SET_MUSIC = 'PLAY_SET_MUSIC'

export const playSetMusic = payload => ({
  type: PLAY_SET_MUSIC,
  payload: {
    ...payload
  }
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_SET_MUSIC:
      return {
        data: {
          ...state.data,
          ...payload
        }
      }

    default:
      return { ...state }
  }
}
