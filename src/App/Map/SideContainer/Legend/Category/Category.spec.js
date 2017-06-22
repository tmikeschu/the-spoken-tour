import React from 'react'
import { shallow } from "enzyme"
import Category from "./Category"
import { categoryIcons, categoryLabels } from '../../../category_data'

describe("<Category />", () => {
  const category = shallow(<Category category="stay" />)

  it("renders without crashing", () => {
    expect(category).toBeTruthy()
  })

  it("renders the correct content", () => {
    expect(category.equals(
      <li>
        <span>
          <img 
            src={categoryIcons["stay"]} 
            alt="stay"
          />
        </span> 
        → { categoryLabels["stay"] }
      </li>
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(category.getNodes()).toMatchSnapshot()
    })
  })
})
