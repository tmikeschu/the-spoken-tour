import React from "react"
import PropTypes from "prop-types"
import SuggestionForm from "./SuggestionForm/SuggestionFormContainer"
import Legend from "./Legend/LegendContainer"
import Info from "./Info/Info"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfoContainer"
import Filters from "./Filters/FiltersContainer"

const SideWrapper = props => {
  const { categories } = props

  return (
    <section>
      <Legend categories={categories} />
      <SuggestionInfo />
      <Filters categories={categories} />
      <div>
        <Info />
        <SuggestionForm />
      </div>
    </section>
  )
}

SideWrapper.propTypes = {
  categories: PropTypes.array.isRequired
}

export default SideWrapper

