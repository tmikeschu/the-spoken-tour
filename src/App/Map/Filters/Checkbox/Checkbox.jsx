import React from 'react'
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

export default Checkbox

