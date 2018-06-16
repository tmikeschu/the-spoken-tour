import React from "react"
import PropTypes from "prop-types"
import Category from "./Category/Category"
import Emoji from "../../Emoji"
import { categoryIcons } from "../../category_data"

const Legend = ({ categories, date, toggleFlags }) => {
  const legendCategories = categories.map((category, i) => (
    <Category key={i} category={category} />
  ))

  return (
    <article className="Legend">
      <h4>Legend</h4>
      <ul>
        <li>
          <span style={{ fontWeight: "bold" }}>―― </span> → Planned Route
        </li>
        <li>
          <span style={{ fontWeight: "bold", color: "#f00" }}>―― </span> →
          Actual Route
        </li>
        <li>
          <Emoji emoji={categoryIcons.cycling} /> → 🎉 We made it! 🎉
        </li>
        <li>
          <span>
            <Emoji emoji={categoryIcons.endOfDay} onClick={toggleFlags} />
          </span>{" "}
          → Day-to-Day (click flag to hide/show flag markers)
        </li>
        {legendCategories}
      </ul>
    </article>
  )
}

Legend.defaultProps = {
  date: "",
}

Legend.propTypes = {
  categories: PropTypes.array.isRequired,
  date: PropTypes.string,
}

export default Legend
