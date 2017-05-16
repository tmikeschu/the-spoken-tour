import React from "react"
import { shallow, mount } from "enzyme"
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

  describe("#handleSubmit", () => {
    it("is called on submit", () => {
      const restore = ContactForm.prototype.handleSubmit
      const mock = ContactForm.prototype.handleSubmit = jest.fn()
      const contactForm = mount(<ContactForm />)
      contactForm.find(".contact-form form").simulate("submit")
      expect(mock).toHaveBeenCalled()
      
      ContactForm.prototype.handleSubmit = restore
    })
  })

  describe("#handleChange", () => {
    it("is called on a key change", () => {
      const restore = ContactForm.prototype.handleChange
      const mock = ContactForm.prototype.handleChange = jest.fn()
      const contactForm = mount(<ContactForm />)
      contactForm.find(".contact-form input[name='name']").simulate("change")
      expect(mock).toHaveBeenCalledTimes(1)
      contactForm.find(".contact-form input[name='email']").simulate("change")
      expect(mock).toHaveBeenCalledTimes(2)
      
      ContactForm.prototype.handleChange = restore
    })

    it("updaates state values", () => {
      const contactForm = mount(<ContactForm />)
      const nameField = contactForm.find(".contact-form input[name='name']")

      expect(nameField.node.value).toEqual('')

      nameField.node.value = "a"
      nameField.simulate("change", nameField)

      expect(nameField.node.value).toEqual('a')
    })
  })
})

