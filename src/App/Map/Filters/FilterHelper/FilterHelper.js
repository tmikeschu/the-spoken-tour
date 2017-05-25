export function filterPins (event, currentFilters) {
  const { value, checked } = event.target

  const pinFilters = (checked && currentFilters.concat(value)) ||
    currentFilters.filter(f => f !== value)

  return pinFilters
}

