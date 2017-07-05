import React from "react"
import PropTypes from "prop-types"
import SuggestionForm from "./SuggestionForm/SuggestionFormContainer"
import Legend from "./Legend/LegendContainer"
import Info from "./Info/Info"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfoContainer"
import Filters from "./Filters/Filters"

const SideWrapper = props => {
  const {
    setFilters,
    pinFilters,
    categories
  } = props

  const legend = (
    <Legend
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
  setFilters: PropTypes.func.isRequired,
  pinFilters: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default SideWrapper

