import { tokenRequest } from 'store/reducers/token'
import { handleHttpError } from './httpHandlers'
import { of, throwError } from 'rxjs'
import { switchMap, toArray } from 'rxjs/operators'

describe('httpHandlers', () => {
  it('Should fire tokenRequest when status is equal 401', async () => {
    const service = () => throwError({ response: {}, status: 401 })

    const result = await of({})
      .pipe(switchMap(() => service().pipe(handleHttpError(() => of({})))))
      .pipe(toArray())
      .toPromise()

    expect(result).toEqual([tokenRequest()])
  })

  it('Should fire tokenRequest when status is equal 502', async () => {
    const service = () => throwError({ response: {}, status: 502 })

    const result = await of({})
      .pipe(switchMap(() => service().pipe(handleHttpError(() => of({})))))
      .pipe(toArray())
      .toPromise()

    expect(result).toEqual([tokenRequest()])
  })
})
