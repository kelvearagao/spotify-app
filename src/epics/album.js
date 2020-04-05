import { switchMap, map } from "rxjs/operators"
import { of } from "rxjs"
import { combineEpics, ofType } from "redux-observable"
import albumService from "services/album"
import {
  ACTION_TYPES,
  albumRequestSuccess,
  albumRequestError
} from "store/reducers/album"
import { handleHttpError } from "utils/httpHandlers"

const searchEpic = action$ =>
  action$.pipe(
    ofType(ACTION_TYPES.ALBUM_REQUEST),
    switchMap(action => {
      return albumService(action.payload).pipe(
        map(({ response }) => albumRequestSuccess(response)),
        handleHttpError(response => {
          return of(albumRequestError(response.error))
        })
      )
    })
  )

export default combineEpics(searchEpic)
