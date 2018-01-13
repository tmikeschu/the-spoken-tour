import React from "react"
import { shallow } from "enzyme"
import Filters from "./Filters"
import Checkbox from "./Checkbox/Checkbox"

describe("<Filters />", () => {
  const wrapper = shallow(
    <Filters
      categories={["stay"]}
      pinFilters={["stay"]}
      setFilters={function setFilters() {}}
    />,
  )

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
