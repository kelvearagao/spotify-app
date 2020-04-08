import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import tokenEpic from './token'
import { toArray } from 'rxjs/operators'
import {
  tokenRequest,
  tokenRequestError,
  tokenRequestSuccess
} from 'store/reducers/token'

describe('tokenEpic', () => {
  it('Should dispatch error when it does not have access_token', async () => {
    const action$ = ActionsObservable.of(tokenRequest())
    const state$ = of({})
    const epic$ = tokenEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([tokenRequestError()])
  })

  it('Should dispatch success when it has access_token', async () => {
    localStorage.setItem('access_token', '123')
    const action$ = ActionsObservable.of(tokenRequest())
    const state$ = of({})
    const epic$ = tokenEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([tokenRequestSuccess()])
  })
})
