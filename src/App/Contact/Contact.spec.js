import React from "react"
import { shallow } from "enzyme"
import Contact from "./Contact"
import ContactForm from "./ContactForm/ContactForm"

describe("<Contact />", () => {
  it("renders a contact page", () => {
    const contact = shallow(<Contact />)
    expect(contact.find("article.contact").length).toEqual(1)
    expect(contact.find("h3").length).toEqual(1)
    expect(contact.find("section").length).toEqual(1)
    expect(contact.find("section p").length).toEqual(2)
    expect(contact.find("ContactForm").length).toEqual(1)
  })
})

