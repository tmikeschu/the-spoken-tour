import React from 'react'
import PropTypes from 'prop-types'
import { categoryIcons, categoryLabels } from '../../category_data'

const Category = ({ category }) =>  (
  <li>
    <span>
      <img 
        src={categoryIcons[category]} 
        alt={category}
      />
    </span> 
    → { categoryLabels[category] }
  </li>
)

Category.propTypes = {
  category: PropTypes.string.isRequired
}

export default Category

