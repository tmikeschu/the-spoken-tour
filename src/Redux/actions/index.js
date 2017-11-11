import * as types from "../types"

export const addSuggestions = suggestions => ({
  type: types.ADD_SUGGESTIONS,
  data: suggestions
})

export const addSuggestionPin = suggestionPin => ({
  type: types.ADD_SUGGESTION_PIN,
  data: suggestionPin
})

export const addCurrentSuggestion = currentSuggestion => ({
  type: types.ADD_CURRENT_SUGGESTION,
  data: currentSuggestion
})

export const toggleSuggestionInfo = infoIsActive => ({
  type: types.TOGGLE_SUGGESTION_INFO_IS_ACTIVE,
  data: infoIsActive
})

export const addCurrentLocation = (currentLocation = {}) => ({
  type: types.ADD_CURRENT_LOCATION,
  data: currentLocation
})

export const addPinFilters = pinFilters => ({
  type: types.ADD_PIN_FILTERS,
  data: pinFilters
})

export const addRoutePoints = (routePoints = []) => ({
  type: types.ADD_ROUTE_POINTS,
  data: routePoints
})

export const addActualPath = (actualPath = []) => ({
  type: types.ADD_ACTUAL_PATH,
  data: actualPath
})

export const toggleFlags = () => ({
  type: types.TOGGLE_FLAGS
})

