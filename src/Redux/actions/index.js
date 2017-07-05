import * as types from "../types"

export const fetchPhotos = service => (
  async dispatch => {
    const response = await service.get("/api/v1/instagram_photos")
    dispatch(addPhotos(response.data || []))
  }
)

export const addPhotos = photos => ({
  type: types.ADD_PHOTOS,
  data: photos
})

export const fetchSuggestions = service => (
  async dispatch => {
    const response = await service.get("/api/v1/suggestion_pins")
    dispatch(addSuggestions(response.data || []))
  }
)

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

export const fetchCurrentLocation = service => (
  async dispatch => {
    const response = await service.get("/api/v1/current_location")
    dispatch(addCurrentLocation(response.data || {}))
  }
)

export const addCurrentLocation = currentLocation => ({
  type: types.ADD_CURRENT_LOCATION,
  data: currentLocation
})

