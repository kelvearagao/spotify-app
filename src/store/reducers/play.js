export const initialState = {
  data: {
    artist: '',
    musicName: '',
    previewUrl: ''
  }
}

const PLAY_SET_MUSIC = 'PLAY_SET_MUSIC'

export const playSetMusic = ({ previewUrl, artist, musicName, albumImg }) => ({
  type: PLAY_SET_MUSIC,
  payload: {
    previewUrl,
    artist,
    musicName,
    albumImg
  }
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_SET_MUSIC:
      return {
        data: {
          ...payload
        }
      }

    default:
      return { ...state }
  }
}
