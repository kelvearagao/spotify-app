import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import tokenEpic from './token'
import { toArray } from 'rxjs/operators'
import { tokenRequest, tokenRequestSuccess } from 'store/reducers/token'

describe('tokenEpic', () => {
  it('Should dispatch success when tokenRequest is fired', async () => {
    const action$ = ActionsObservable.of(tokenRequest())
    const state$ = of({})
    const epic$ = tokenEpic(action$, state$)
    const result = await epic$.pipe(toArray()).toPromise()

    expect(result).toEqual([
      tokenRequestSuccess()
    ])
  })
})
