import {
  switchMap,
  map,
  tap,
  debounceTime,
  withLatestFrom
} from "rxjs/operators"
import { of } from "rxjs"
import { combineEpics, ofType } from "redux-observable"
import {
  ACTION_TYPES,
  searchRequestSuccess,
  searchRequestError
} from "store/reducers/home"
import searchService from "services/search"
import { handleHttpError } from "utils/httpHandlers"

const searchEpic = (action$, state$) =>
  action$.pipe(
    ofType(ACTION_TYPES.SEARCH_REQUEST),
    debounceTime(600),
    tap(action => {
      localStorage.setItem("search", action.payload)
    }),
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      const data = state.home.data[action.payload]

      if (data) {
        return of(searchRequestSuccess({ albums: { ...data } }))
      }

      return searchService(action.payload).pipe(
        map(({ response }) => searchRequestSuccess(response)),
        handleHttpError(response => {
          return of(searchRequestError(response.error))
        })
      )
    })
  )

export default combineEpics(searchEpic)
