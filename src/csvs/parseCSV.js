import * as R from "ramda"

const firstLast = x => R.pair(R.head(x), R.last(x))
export const removeWrappingQuotes = R.pipe(
  R.when(R.pipe(firstLast, R.equals([`"`, `"`])), R.slice(1, -1)),
)
const EVEN_TRAILING_QUOTES_MATCH = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/
export const toList = R.pipe(
  R.split(EVEN_TRAILING_QUOTES_MATCH),
  R.map(removeWrappingQuotes),
)
export const capitalize = R.pipe(
  R.splitAt(1),
  R.adjust(R.toUpper, 0),
  R.join(""),
)
export const camelize = R.pipe(
  R.split("_"),
  R.splitAt(1),
  R.adjust(R.pipe(R.map(capitalize), R.join("")), 1),
  R.flatten,
  R.join(""),
)
export const headerize = ([[headers], data]) =>
  R.map(R.zipObj(R.map(camelize, headers)), data)

export default R.pipe(R.split("\n"), R.map(toList), R.splitAt(1), headerize)
