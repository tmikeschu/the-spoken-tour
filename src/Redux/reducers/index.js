import { combineReducers } from "redux"
import * as types from "../types"

const actualPath = (state = [], action) =>
  action.type === types.ADD_ACTUAL_PATH ? action.data : state

const center = (
  state = { lat: -1.6246706849414423, lng: -85.56376812500002 },
  { type, data = {} } = {},
) => (type === types.SET_CENTER ? data : state)

const currentLocation = (state = {}, action) =>
  action.type === types.ADD_CURRENT_LOCATION ? action.data : state

const currentSuggestion = (state = {}, action) =>
  action.type === types.ADD_CURRENT_SUGGESTION ? action.data : state

const pinFilters = (state = ["DISPLAYNONE"], action) =>
  action.type === types.ADD_PIN_FILTERS ? action.data : state

const refs = (state = {}, { type, data = {} } = {}) =>
  type === types.ADD_REF ? { ...state, ...data } : state

const routePoints = (state = [], action) =>
  action.type === types.ADD_ROUTE_POINTS ? action.data : state

const showFlags = (state = false, action) =>
  action.type === types.TOGGLE_FLAGS ? !state : state

const suggestionInfoIsActive = (state = false, action) =>
  action.type === types.TOGGLE_SUGGESTION_INFO_IS_ACTIVE ? action.data : state

const suggestionPin = (state = {}, action) =>
  action.type === types.ADD_SUGGESTION_PIN ? action.data : state

const suggestions = (state = [], action = { data: [] }) =>
  action.type === types.ADD_SUGGESTIONS ? action.data : state

const zoom = (state = 3, { type, data = 3 } = {}) =>
  type === type.SET_ZOOM ? data : state

export default combineReducers({
  map: combineReducers({
    actualPath,
    center,
    currentLocation,
    currentSuggestion,
    pinFilters,
    refs,
    routePoints,
    showFlags,
    suggestionInfoIsActive,
    suggestionPin,
    suggestions,
    zoom,
  }),
})
