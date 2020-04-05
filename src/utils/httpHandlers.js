import { catchError } from "rxjs/operators"
import { of } from "rxjs"
import { tokenRequest } from "store/reducers/token"

export const handleHttpError = cb =>
  catchError(({ response, status }) => {
    switch (status) {
      case 401:
        localStorage.removeItem("access_token")

        return of(tokenRequest())

      default:
        return cb(response, status)
    }
  })
