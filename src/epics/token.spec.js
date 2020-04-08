import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import tokenEpic from './token'
import { toArray } from 'rxjs/operators'
import { tokenRequest, tokenRequestError } from 'store/reducers/token'

describe('tokenEpic', () => {
  it('Should dispatch error when does not have access_token', async () => {
    const action$ = ActionsObservable.of(tokenRequest())
    const state$ = of({})
    const epic$ = tokenEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([tokenRequestError()])
  })
})
