export function filterPins (event, currentFilters) {
  const filter = event.target.value
  const checked = event.target.checked
  let pinFilters

  pinFilters = filter === "" && []
  pinFilters = (checked && currentFilters.concat(filter)) ||
    currentFilters.filter(f => f !== filter)

  return pinFilters
}

