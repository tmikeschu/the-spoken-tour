import { combineReducers } from "redux"
import * as types from "../types"

const photos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_PHOTOS:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  photos
})

