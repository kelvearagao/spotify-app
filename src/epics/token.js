import { map } from "rxjs/operators"
import { combineEpics, ofType } from "redux-observable"
import { ACTION_TYPES, tokenRequestSuccess } from "store/reducers/token"

const expiredTokenEpic = action$ =>
  action$.pipe(
    ofType(ACTION_TYPES.TOKEN_REQUEST),
    map(() => {
      window.location.href = 'https://7j1ylvai5f.execute-api.us-west-2.amazonaws.com/dev/login'

      return tokenRequestSuccess()
    })
  )

export default combineEpics(expiredTokenEpic)
