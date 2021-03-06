import { map } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import {
  ACTION_TYPES,
  tokenRequestSuccess,
  tokenRequestError
} from 'store/reducers/token'

const expiredTokenEpic = action$ =>
  action$.pipe(
    ofType(ACTION_TYPES.TOKEN_REQUEST),
    map(() => {
      if (localStorage.getItem('access_token')) {
        return tokenRequestSuccess()
      }

      localStorage.setItem('access_token', '')

      return tokenRequestError()
    })
  )

export default combineEpics(expiredTokenEpic)
