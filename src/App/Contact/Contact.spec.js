import React from "react"
import { shallow } from "enzyme"
import Contact from "./Contact"
import ContactForm from "./ContactForm/ContactForm"

describe("<Contact />", () => {
  const contact = shallow(<Contact />)

  it("renders a contact page", () => {
    expect(contact).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(contact.getNodes()).toMatchSnapshot()
    })
  }) 
})

