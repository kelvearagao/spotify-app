import { combineEpics } from "redux-observable"
import home from "./home"
import album from "./album"
import token from "./token"

export default combineEpics(home, album, token)