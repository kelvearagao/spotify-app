import { combineReducers } from "redux"
import home from "./home"
import album from "./album"
import token from "./token"
import play from "./play"

export default combineReducers({
  home,
  album,
  token,
  play
})
