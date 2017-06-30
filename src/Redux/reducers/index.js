import { combineReducers } from "redux"
import * as types from "../types"

const photos = (state = [], action) => (
  action.type === types.ADD_PHOTOS ? action.data : state
)

const suggestions = (state = [], action) => {
  switch (action.type) {
    case types.ADD_SUGGESTIONS:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  photos,
  suggestions
})

