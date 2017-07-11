import React from 'react'
import PropTypes from 'prop-types'
import { categoryLabels } from '../../../category_data'

const Checkbox = ({ category, filterPins, pinFilters }) => (
  <article className="checkbox">
    <input 
      type="checkbox"
      value={category}
      onChange={event => filterPins(event)}
      checked={pinFilters.includes(category)}
    />
    <label>{ categoryLabels[category] }</label>
  </article>
)

Checkbox.propTypes = {
  category: PropTypes.string.isRequired,
  filterPins: PropTypes.func.isRequired,
  pinFilters: PropTypes.array.isRequired
}

export default Checkbox

