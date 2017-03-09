import React from "react"
import { shallow } from "enzyme"
import ContactForm from "./ContactForm"

describe("<ContactForm />", () => {
  it("renders a contact form", () => {
    const contactForm = shallow(<ContactForm />)
    expect(contactForm.find("article.contact-form").length).toEqual(1)
    expect(contactForm.find("form").length).toEqual(1)
    expect(contactForm.find("form input[name='name']").length).toEqual(1)
    expect(contactForm.find("form input[name='email']").length).toEqual(1)
    expect(contactForm.find("form textarea").length).toEqual(1)
    expect(contactForm.find("form input[name='_subject']").length).toEqual(1)
    expect(contactForm.find("form input[name='_gotcha']").length).toEqual(1)
    expect(contactForm.find("form input[type='submit']").length).toEqual(1)
    expect(contactForm.find("article p").length).toEqual(3)
  })
})

