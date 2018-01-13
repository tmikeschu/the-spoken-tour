import React from "react"
import PropTypes from "prop-types"
import { categoryLabels } from "../../../category_data"

const Checkbox = ({ category, filterPins, pinFilters }) => (
  <article className="Checkbox">
    <input
      type="checkbox"
      id={category || "all"}
      value={category}
      checked={pinFilters.includes(category)}
      onChange={event => filterPins(event)}
    />
    <label htmlFor={category || "all"}>{categoryLabels[category]}</label>
  </article>
)

Checkbox.propTypes = {
  category: PropTypes.string.isRequired,
  filterPins: PropTypes.func.isRequired,
  pinFilters: PropTypes.array.isRequired,
}

export default Checkbox
