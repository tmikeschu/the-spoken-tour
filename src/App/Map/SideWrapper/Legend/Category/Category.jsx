import React from "react"
import PropTypes from "prop-types"
import Emoji from "../../../Emoji"
import { categoryIcons, categoryLabels } from "../../../category_data"

const Category = ({ category }) => (
  <li>
    <Emoji emoji={categoryIcons[category]} />
    → {categoryLabels[category]}
  </li>
)

Category.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Category
