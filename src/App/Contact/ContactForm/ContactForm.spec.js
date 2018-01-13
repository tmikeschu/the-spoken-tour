import React from "react"
import ContactForm from "./ContactForm"

describe("<ContactForm />", () => {
  const wrapper = shallow(<ContactForm />)
  const form = wrapper.instance()

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe("#handleChange", () => {
    it("updates state", () => {
      expect(wrapper.state("contact").name).toEqual("")

      wrapper
        .find(".contact-form input[name='name']")
        .first()
        .simulate("change", { target: { name: "name", value: "b" } })

      expect(wrapper.state("contact").name).toEqual("b")
    })
  })

  describe("#handleSubmit", () => {
    it("is called on submit", () => {
      const fakeEvent = { preventDefault: jest.fn() }
      const restore = form.handleSubmit
      const mock = (form.handleSubmit = jest.fn())

      wrapper.find(".contact-form form").simulate("submit", fakeEvent)

      expect(mock).toHaveBeenCalled()
      form.handleSubmit = restore
    })

    it("makes a post request", async () => {
      const contactForm = shallow(<ContactForm />)
      const response = await contactForm
        .instance()
        .handleSubmit(fakeEvent, fakeService, expectedMessageData)

      const expectedResponse = {
        status: 201,
        data: "AHH!",
      }

      expect(response).toEqual(expectedResponse)
    })
  })

  describe("#handleResponse", () => {
    it("is called on submit", async () => {
      const restore = ContactForm.prototype.handleResponse
      const mock = (ContactForm.prototype.handleResponse = jest.fn())
      const contactForm = shallow(<ContactForm />)
      await contactForm
        .instance()
        .handleSubmit(fakeEvent, fakeService, expectedMessageData)

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
        success: true,
        contact: { name: "", email: "", message: "" },
      })
    })

    it("returns success and contact for 400", () => {
      const contactForm = shallow(<ContactForm />).instance()
      const response = contactForm.stateFor(fakeResponse2)
      expect(response).toMatchObject({
        failure: true,
        error: "AHH!",
      })
    })
  })
})

const fakeService = {
  post(url, data) {
    return {
      status: 201,
      data: "AHH!",
    }
  },
}
const fakeResponse1 = {
  status: 201,
  data: "COOL",
}
const fakeResponse2 = {
  status: 400,
  data: "AHH!",
}
const expectedMessageData = {
  contact: {
    name: "Tommy",
    email: "tom@my.crosby",
    message: "yo yo yo",
  },
}
const fakeEvent = {
  contact: {
    name: "Tommy",
    email: "tom@my.crosby",
    message: "yo yo yo",
  },
  preventDefault() {},
}
