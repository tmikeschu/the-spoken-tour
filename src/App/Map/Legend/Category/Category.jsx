import React from 'react'
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

export default Category

