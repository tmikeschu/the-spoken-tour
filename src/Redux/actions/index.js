import * as types from "../types"

export const fetchPhotos = service => {
  return async dispatch => {
    const response = await service.get("/api/v1/instagram_photos")
    dispatch(addPhotos(response.data))
  }
}

export const addPhotos = photos => {
  return {
    type: types.ADD_PHOTOS,
    data: photos
  }
}

export const fetchSuggestions = service => {
  return async dispatch => {
    const response = await service.get("/api/v1/suggestion_pins")
    dispatch(addSuggestions(response.data))
  }
}

export const addSuggestions = suggestions => {
  return {
    type: types.ADD_SUGGESTIONS,
    data: suggestions
  }
}

