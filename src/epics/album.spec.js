import { ActionsObservable } from 'redux-observable'
import { of, throwError } from 'rxjs'
import * as ajax from "utils/ajax"
import albumEpic from './album'
import { toArray } from 'rxjs/operators'
import { albumRequest, albumRequestSuccess, albumRequestError } from 'store/reducers/album'

jest.mock('utils/ajax')

describe('albumEpic', () => {
  it('Should dispatch success when there is no error on albumService', async () => {
    const response = {
        id: 'album-01',
        artists: [{name: 'Artist Name'}],
        name: 'Album Name',
        images: [{ url: 'http://test.com.br'}],
        tracks: {
            items: []
        }
    }
    const id = 124
    ajax.get.mockImplementation(() => of({ response }))

    const action$ = ActionsObservable.of(albumRequest(id))
    const state$ = of({})
    const epic$ = albumEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([
        albumRequestSuccess({ ...response })
    ])
  })

  it('Should dispatch error when there is an error on albumService', async () => {
    const response = {
        error: {}
    };
    const id = 124
    ajax.get.mockImplementation(() => throwError({ response }))
    const state$ = of({})

    const action$ = ActionsObservable.of(albumRequest(id))
    const epic$ = albumEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([
        albumRequestError(response.error)
    ])
  })
})
