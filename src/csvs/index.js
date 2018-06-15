import * as R from "ramda"
import currentLocationPinsRaw from "./current_location_pins"
import routePinsRaw from "./route_pins"
import suggestionPinsRaw from "./suggestion_pins"
import parseCSV from "./parseCSV"

const latLng = R.pipe(
  R.map(R.evolve({ lat: Number, lng: Number, id: Number })),
  R.map(row =>
    R.merge(R.omit(["lat", "lng"], row), {
      location: R.pick(["lat", "lng"], row),
    }),
  ),
)

const CATEGORIES = ["stay", "checkout", "avoid", "bike_shop", "other"]
const category = R.evolve({ category: index => CATEGORIES[index] })

const csvPipeline = R.pipe(parseCSV, latLng, R.map(category))
export const actualPath = R.pipe(
  csvPipeline,
  R.reject(R.pipe(R.prop("location"), R.values, R.sum, R.equals(0))),
  R.sort(
    R.comparator(
      ({ createdAt: a }, { createdAt: b }) => new Date(a) < new Date(b),
    ),
  ),
)(currentLocationPinsRaw)
export const currentLocation = R.pipe(R.last, row =>
  R.merge(row, { date: new Date(row.updatedAt).toLocaleString() }),
)(actualPath)
export const suggestionPins = csvPipeline(suggestionPinsRaw)
export const routePins = csvPipeline(routePinsRaw)
