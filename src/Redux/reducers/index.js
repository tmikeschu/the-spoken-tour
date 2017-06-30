import { combineReducers } from "redux"
import * as types from "../types"

const photos = (state = [], action) => (
  action.type === types.ADD_PHOTOS ? action.data : state
)

export default combineReducers({
  photos
})

