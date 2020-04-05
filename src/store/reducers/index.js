import { combineReducers } from "redux"
import home from "./home"
import album from "./album"
import token from "./token"

export default combineReducers({
  home,
  album,
  token
})
