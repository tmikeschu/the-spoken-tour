import React from "react"
import { shallow, mount } from "enzyme"
import ContactForm from "./ContactForm"

const fakeService = {
  post(url, data) {
    return {
      status: 201,
      data: "AHH!"
    }
  }
}
const fakeResponse1 = {
  status: 201,
  data: "COOL"
}
const fakeResponse2 = {
  status: 400,
  data: "AHH!"
}
const expectedMessageData = {
  contact: {
    name: "Tommy", email: "tom@my.crosby", message: "yo yo yo"
  }
}
const event = {
  contact: {
    name: "Tommy", email: "tom@my.crosby", message: "yo yo yo"
  },
  preventDefault() {}
}

describe("<ContactForm />", () => {
  it("renders a contact form", () => {
    const contactForm = shallow(<ContactForm />)
    expect(contactForm.find("article.contact-form").length).toEqual(1)
    expect(contactForm.find("form").length).toEqual(1)
    expect(contactForm.find("form input[name='name']").length).toEqual(1)
    expect(contactForm.find("form input[name='email']").length).toEqual(1)
    expect(contactForm.find("form textarea").length).toEqual(1)
    expect(contactForm.find("form input[name='_subject']").length).toEqual(1)
    expect(contactForm.find("form input[type='submit']").length).toEqual(1)
    expect(contactForm.find("article p").length).toEqual(3)
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

  describe("#messageData", () => {
    it("returns an object of existing state", () => {
      const contactForm = shallow(<ContactForm />)
      contactForm.setState(expectedMessageData)
      const messageData = contactForm.instance().messageData()

      expect(messageData).toMatchObject(expectedMessageData)
    })
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

    it("makes a post request", async () => {
      const contactForm = shallow(<ContactForm />)
      const response = await contactForm.instance()
        .handleSubmit(event, fakeService, expectedMessageData)

      expect(response).toEqual(response)
    })
  })

  describe("#handleResponse", () => {
    it("is called on submit", async () => {
      const restore = ContactForm.prototype.handleResponse
      const mock = ContactForm.prototype.handleResponse = jest.fn()
      const contactForm = shallow(<ContactForm />)
      await contactForm.instance()
        .handleSubmit(event, fakeService, expectedMessageData)

      expect(mock).toHaveBeenCalled()
      ContactForm.prototype.handleResponse = restore
    })

    it("sets state for a 201", () => {
      const contactForm = shallow(<ContactForm />).instance()
      expect(contactForm.state.success).toBeFalsy()
      contactForm.handleResponse(fakeResponse1)
      expect(contactForm.state.success).toBeTruthy()
    })

    it("sets state for a 400", () => {
      const contactForm = shallow(<ContactForm />).instance()
      expect(contactForm.state.failure).toBeFalsy()
      contactForm.handleResponse(fakeResponse2)
      expect(contactForm.state.failure).toBeTruthy()
    })

    it("and state times out", () => {
      const contactForm = shallow(<ContactForm />).instance()
      contactForm.handleResponse(fakeResponse1)
      expect(contactForm.state.success).toBeTruthy()
      setTimeout(() => {
        expect(contactForm.state.success).toBeFalsy()
      }, 3000)
    })

    it("and state times out", () => {
      const contactForm = shallow(<ContactForm />).instance()
      contactForm.handleResponse(fakeResponse2)
      expect(contactForm.state.failure).toBeTruthy()
      setTimeout(() => {
        expect(contactForm.state.failure).toBeFalsy()
      }, 3000)
    })
  })

  describe("#stateFor", () => {
    it("returns success and contact for 201", () => {
      const contactForm = shallow(<ContactForm />).instance()
      const response = contactForm.stateFor(fakeResponse1)
      expect(response).toMatchObject({
        success: true, contact: { name: "", email: "", message: ""}
      })
    })

    it("returns success and contact for 400", () => {
      const contactForm = shallow(<ContactForm />).instance()
      const response = contactForm.stateFor(fakeResponse2)
      expect(response).toMatchObject({
        failure: true, error: "AHH!"
      })
    })
  })
})

