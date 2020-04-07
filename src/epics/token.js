import { map } from "rxjs/operators"
import { combineEpics, ofType } from "redux-observable"
import { ACTION_TYPES, tokenRequestSuccess } from "store/reducers/token"

const expiredTokenEpic = action$ =>
  action$.pipe(
    ofType(ACTION_TYPES.TOKEN_REQUEST),
    map(() => {
      console.log('request')
      // const formData = new FormData();
      // formData.append('grant_type', 'refresh_token')
      // formData.append('refresh_token', localStorage.getItem('refresh_token'))

      // fetch('https://accounts.spotify.com/api/token', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   body: formData
      // }).then(res => res.json()).then(res => console.log(res))

      //window.location.href = process.env.REACT_APP_LOGIN_ENDPOINT
      //console.log('-->!', window.location)
      //window.location.href = 'https://7j1ylvai5f.execute-api.us-west-2.amazonaws.com/dev/login'

      if(localStorage.getItem('access_token')) {
        return tokenRequestSuccess()
      } 

      localStorage.setItem('access_token', '')

      return {type: 'NULL'}
    })
  )

export default combineEpics(expiredTokenEpic)
