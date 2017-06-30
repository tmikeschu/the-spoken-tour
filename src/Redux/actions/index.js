import * as types from "../types"

export const fetchPhotos = service => {
  return async (dispatch) => {
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

