import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category/Category'
import { categoryIcons } from '../../category_data'

const Legend = ({ categories, date, toggleFlags }) => {
  const legendCategories = categories.map((category, i) => ( 
    <Category key={i} category={category} />
  ))

  return (
    <article className="legend">
      <h4>Legend</h4>
      <ul>
        <li><span style={{fontWeight: "bold"}}>―― </span> → Planned Route</li>
        <li><span style={{fontWeight: "bold", color: "#f00"}}>―― </span> → Actual Route</li>
        <li>
          <span>
            <img src={categoryIcons["cycling"]} alt="cyclist"/>
          </span> → That's Us! ( as of {date} )
        </li>
        <li>
          <span>
            <img src={categoryIcons["endOfDay"]} alt="flag" onClick={toggleFlags} />
          </span> → Day-to-Day (click flag to hide/show flag markers)
        </li>
        { legendCategories }
      </ul>
    </article>
  )
}

Legend.defaultProps = {
  date: "",
  categories: []
}

Legend.propTypes = {
  categories: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired
}

export default Legend
