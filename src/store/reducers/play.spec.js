import reducer, { playSetMusic, initialState } from './play'

describe('Play reducer', () => {
  it('Should handle the playSetMusic action', () => {
    const payload = {
      previewUrl: 'katy.mp3',
      artist: 'Katy',
      musicName: 'fireworks',
      albumImg: 'katy.jpg',
      index: 1,
      items: [{}]
    }

    const result = reducer(undefined, playSetMusic(payload))

    expect(result).toEqual({
      ...initialState,
      data: {
        ...payload
      }
    })
  })

  it('Should has the same state when it handles an unknow action', () => {
    const result = reducer(undefined, {
      type: 'UNKNOW',
      payload: {
        name: 'test'
      }
    })

    expect(result).toEqual({
      ...initialState
    })
  })
})
