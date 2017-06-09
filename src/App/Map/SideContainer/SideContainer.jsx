import React from "react"
import _ from "lodash"
import SuggestionForm from "./SuggestionForm/SuggestionForm"
import Legend from "./Legend/Legend"
import Info from "./Info/Info"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfo"
import Filters from "./Filters/Filters"

const SideContainer = props => {
  const { 
    currentLocation,
    setSuggestion,
    getSuggestions,
    suggestionPin,
    suggestions,
    currentSuggestion,
    suggestionInfoIsActive,
    setFilters,
    pinFilters
  } = props

  const categories = _.uniq(suggestions.map(s => s.category))

  const legend = (
    <Legend 
      date={currentLocation && currentLocation.date} 
      categories={categories}
    />
  )

  const suggestionForm = (
    <SuggestionForm
      setSuggestion={setSuggestion}
      getSuggestions={getSuggestions}
      suggestionPin={suggestionPin}
    />
  )

  const suggestionInfo = (
    <SuggestionInfo
      currentSuggestion={currentSuggestion}
      suggestionInfoIsActive={suggestionInfoIsActive}
    />
  )

  const FiltersBox = (
    <Filters
      categories={categories}
      setFilters={setFilters}
      pinFilters={pinFilters}
    />
  )

  return (
    <section>
      { legend }
      { suggestionInfo }
      { FiltersBox }
      <div>
        <Info />
        { suggestionForm }
      </div>
    </section>
  )
}

export default SideContainer
