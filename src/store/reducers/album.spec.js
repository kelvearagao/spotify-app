import reducer, {
  albumRequest,
  initialState,
  albumRequestSuccess,
  albumRequestError
} from './album'

describe('Album reducer', () => {
  it('Should handle the albumRequest action', () => {
    const result = reducer(undefined, albumRequest())

    expect(result).toEqual({
      ...initialState
    })
  })

  it('Should handle no action', () => {
    const result = reducer(undefined, {})

    expect(result).toEqual({
      ...initialState
    })
  })

  it('Should handle the albumRequestSuccess action', () => {
    const result = reducer(
      undefined,
      albumRequestSuccess({
        id: 'album-01',
        artists: [{ name: 'Artist Name' }],
        name: 'Album Name',
        images: [{ url: 'http://test.com.br' }],
        tracks: {
          items: []
        }
      })
    )

    expect(result).toEqual({
      ...initialState,
      data: {
        'album-01': {
          artist: 'Artist Name',
          image: 'http://test.com.br',
          items: [],
          name: 'Album Name'
        }
      }
    })
  })

  it('Should handle the albumRequestError action', () => {
    const result = reducer(undefined, albumRequestError())

    expect(result).toEqual({
      ...initialState,
      isError: true
    })
  })
})
