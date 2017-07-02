import React from "react"
import { shallow } from "enzyme"
import Info from "./Info"

describe("<Info />", () => {
  const info = shallow(<Info />)

  it("renders without crashing", () => {
    expect(info).toBeTruthy()
  })

  it("renders content", () => {
    expect(info.equals(
      <article className="info">
        <p>Have an amiga in Antigua?  A tía in Tijuana? Couch to crash on in Colombia? Bike shop in Bolivia?</p>
        <p><span>Let</span> <span>us</span> <span>know</span>!</p>
        <p>↓</p>
      </article>
    )).toBeTruthy()
  })
})
