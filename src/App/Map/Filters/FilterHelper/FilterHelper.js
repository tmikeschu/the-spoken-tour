// @flow

interface ValueCheckable {
  value: string,
  checked: boolean
}

interface Eventable {
  target: ValueCheckable
}

export function filterPins (event: Eventable, currentFilters: string[]): string[] {
  const { value, checked }: ValueCheckable = event.target

  const pinFilters: string[] = (checked && currentFilters.concat(value)) ||
    currentFilters.filter(f => f !== value)

  return pinFilters
}

