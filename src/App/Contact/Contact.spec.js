import React from "react"
import { shallow } from "enzyme"
import Contact from "./Contact"
import ContactForm from "./ContactForm/ContactForm"

describe("<Contact />", () => {
  const contact = shallow(<Contact />)

  it("renders a contact page", () => {
    expect(contact).toBeTruthy()
  })

  it("renders the correct content", () => {
    expect(contact.equals(
      <article className="contact">
        <h3>We would love to hear from you!</h3>
        <section>
          <p>
            Email us at 
            <a href="mailto:thespokentour@gmail.com" target="_blank" rel="noopener noreferrer">
              thespokentour@gmail.com
            </a>
          </p>
          <p>
            Follow us on Instagram 
            <a href="https://www.instagram.com/thespokentour/" target="_blank" rel="noopener noreferrer">
              @thespokentour
            </a>
          </p>
        </section>
        <ContactForm />
      </article>
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(contact.getNodes()).toMatchSnapshot()
    })
  }) 
})

