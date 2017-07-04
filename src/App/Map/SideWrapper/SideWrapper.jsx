import React from "react"
import PropTypes from "prop-types"
import SuggestionForm from "./SuggestionForm/SuggestionFormContainer"
import Legend from "./Legend/Legend"
import Info from "./Info/Info"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfoContainer"
import Filters from "./Filters/Filters"

const SideWrapper = props => {
  const {
    currentLocation,
    setFilters,
    pinFilters,
    categories
  } = props

  const legend = (
    <Legend
      date={currentLocation && currentLocation.date}
      categories={categories}
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
      <SuggestionInfo />
      { FiltersBox }
      <div>
        <Info />
        <SuggestionForm />
      </div>
    </section>
  )
}

SideWrapper.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  pinFilters: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default SideWrapper

