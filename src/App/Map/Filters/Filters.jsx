import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from "./Checkbox/Checkbox"
import * as FilterHelper from "./FilterHelper/FilterHelper"

const Filters = props => {
  const { categories, pinFilters, setFilters } = props

  const filterPins = event => {
    const filters = FilterHelper.filterPins(event, pinFilters)
    setFilters(filters)
  }


  const checkboxes = ["", "DISPLAYNONE"].concat(categories)
    .map((category, i) => (
      <Checkbox key={i} category={category} filterPins={filterPins} />)
    )

  return(
    <article className="checkboxes" >
      <h4>Filter Suggestions</h4>
      <article>
        { checkboxes }
      </article>
    </article>
  )
}

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  pinFilters: PropTypes.array.isRequired,
  setFilters: PropTypes.func.isRequired
}

export default Filters
