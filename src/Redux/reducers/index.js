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

const suggestionPin = (state = {}, action) => (
  action.type === types.ADD_SUGGESTION_PIN ? action.data : state
)

const currentSuggestion = (state = {}, action) => (
  action.type === types.ADD_CURRENT_SUGGESTION ? action.data : state
)

const suggestionInfoIsActive = (state = false, action) => (
  action.type === types.TOGGLE_SUGGESTION_INFO_IS_ACTIVE ? action.data : state
)

const currentLocation = (state = {}, action) => (
  action.type === types.ADD_CURRENT_LOCATION ? action.data : state
)

const pinFilters = (state = [], action) => (
  action.type === types.ADD_PIN_FILTERS ? action.data : state
)

export default combineReducers({
  photos,
  map: combineReducers({
    suggestions,
    suggestionPin,
    currentSuggestion,
    suggestionInfoIsActive,
    currentLocation,
    pinFilters
  })
})

