interface Valuable {
  value: string
}

interface Eventable {
  target: Valuable
}

export function filterPins(
  event: Eventable,
  currentFilters: string[],
): string[] {
  const { value }: Valuable = event.target
  return (currentFilters.includes(value) ? uncheck : check)(
    value,
    currentFilters,
  )
}

export const uncheck = (value: string, currentFilters: string[]): string[] =>
  currentFilters.filter(x => x !== value)

export const check = (value: string, currentFilters: string[]): string[] =>
  value === "" || value === "DISPLAYNONE"
    ? [value]
    : currentFilters.filter(x => x !== "DISPLAYNONE" && x !== "").concat(value)
