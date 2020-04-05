import { ActionsObservable } from 'redux-observable'
import { of, throwError } from 'rxjs'
import * as ajax from "utils/ajax"
import homeEpic from './home'
import { toArray } from 'rxjs/operators'
import { searchRequest, searchRequestSuccess, searchRequestError } from 'store/reducers/home'

jest.mock('utils/ajax')

describe('homeEpic', () => {
  it('Should dispatch success when there is no error on searchService', async () => {
    const response = {
        albums: {
            items: []
        }
    }
    const search = 'Test'
    ajax.get.mockImplementation(() => of({ response }))

    const action$ = ActionsObservable.of(searchRequest(search))
    const state$ = of({
        home: {
            data: {}
        }
    })
    const epic$ = homeEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([
        searchRequestSuccess({ ...response })
    ])
  })

  it('Should dispatch success when the data is stored', async () => {
    const response = {
        albums: {
            items: []
        }
    }
    const data = { items: [{}, {}] }
    const search = 'Test'
    ajax.get.mockImplementation(() => of({ response }))

    const action$ = ActionsObservable.of(searchRequest(search))
    const state$ = of({
        home: {
            data: {
                'Test': {
                    ...data
                }
            }
        }
    })
    const epic$ = homeEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([
        searchRequestSuccess({ albums: { ...data } })
    ])
  })

  it('Should dispatch error when there is an error on searchService', async () => {
    const response = {
        error: {}
    };
    const search = 'Test'
    ajax.get.mockImplementation(() => throwError({ response }))
    const state$ = of({
        home: {
            data: {}
        }
    })

    const action$ = ActionsObservable.of(searchRequest(search))
    const epic$ = homeEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([
        searchRequestError(response.error)
    ])
  })
})
