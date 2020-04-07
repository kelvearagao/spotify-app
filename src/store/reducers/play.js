export const initialState = {
    data: {
        artist: '',
        musicName: '',
        previewUrl: ''
    }
  }

export const playSetMusic = ({
    previewUrl,
    artist,
    musicName,
    albumImg
}) => ({
    type: 'PLAY_SET_MUSIC',
    payload: {
        previewUrl,
        artist,
        musicName,
        albumImg
    }
})
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'PLAY_SET_MUSIC': 
        return {
            data: {
                ...payload
            }
        }
  
      default:
        return { ...state }
    }
  }
  