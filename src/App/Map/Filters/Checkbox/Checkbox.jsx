import React from 'react'
import PropTypes from 'prop-types'
import { categoryLabels } from '../../category_data'

const Checkbox = ({ category, filterPins }) => (
  <article className="checkbox">
    <input 
      type="checkbox"
      value={category}
      onChange={event => filterPins(event)}
    />
    <label>{ categoryLabels[category] }</label>
  </article>
)

Checkbox.propTypes = {
  category: PropTypes.string.isRequired,
  filterPins: PropTypes.func.isRequired
}

export default Checkbox

