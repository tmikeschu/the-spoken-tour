import React from 'react'
import { shallow } from "enzyme"
import Filters from "./Filters"
import Checkbox from "./Checkbox/Checkbox"

describe("<Filters />", () => {
  const filters = shallow(
    <Filters 
      categories={["stay"]}
      pinFilters={["stay"]}
      setFilters={function setFilters() {}}
    />
  )

  it("renders without crashing", () => {
    expect(filters).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(filters.getNodes()).toMatchSnapshot()
    })
  })
})

