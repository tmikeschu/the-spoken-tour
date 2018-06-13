import React from "react"
import PropTypes from "prop-types"
import Legend from "./Legend/LegendContainer"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfoContainer"
import Filters from "./Filters/FiltersContainer"

const SideWrapper = ({ categories }) => {
  return (
    <section className="SideContainer">
      <Legend categories={categories} />
      <SuggestionInfo />
      <Filters categories={categories} />
    </section>
  )
}

SideWrapper.propTypes = {
  categories: PropTypes.array.isRequired,
  sideClass: PropTypes.string.isRequired,
}

export default SideWrapper
