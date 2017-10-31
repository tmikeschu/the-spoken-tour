import React, { Component } from "react"
import APIService from "../../APIService/APIService"

const apiService = new APIService("https://spoken-api.herokuapp.com")

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        name: "",
        email: "",
        message: ""
      },
      success: false,
      failure: false,
      error: ""
    }
    this.emptyForm = this.state.contact
  }

  handleChange = (event) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [event.target.name]: event.target.value,
      }
    })
  }

  messageData = () => ({
    contact: this.state.contact
  })

  handleSubmit = async (event, service, messageData) => {
    event.preventDefault()
    const response = await service.post("api/v1/contact", messageData)
    this.handleResponse(response)
    return response
  }

  handleResponse(response = { status: 400 }) {
    const newState = this.stateFor(response)
    this.setState(newState)
    setTimeout(() => {
      this.setState({
        success: false,
        failure: false
      })
    }, 3000)
  }

  stateFor = (response) => {
    const { status, data } = response
    return (
      status === 201 && { success: true, contact: this.emptyForm }
    ) || (
      status === 400 && { failure: true, error: String(data) }
    )
  }

  render() {
    return (
      <article className="component-container contact-form">
        <form onSubmit={event => this.handleSubmit(event, apiService, this.messageData())}>
          <input 
            required type="text" name="name" value={this.state.contact.name} 
            onChange={this.handleChange} placeholder="Your Name"
          />

          <input 
            required type="text" name="email" value={this.state.contact.email} 
            onChange={this.handleChange} placeholder="Email Address"
          />

          <input type="hidden" name="_subject" value="Website contact" />

          <textarea 
            required name="message" value={this.state.contact.message} 
            onChange={this.handleChange} placeholder="What's up?"
          />

          <input type="submit" value="Send" />

          <p style={{ display: this.state.success ? "" : "none" }}>
            Message Sent!
          </p>
          <p style={{ display: this.state.failure ? "" : "none" }}>
            Message failure: { this.state.error }
          </p>
        </form>
        <p>
          *Please allow ample time for a response as we are busy bicycling 15,000 miles.
        </p>
      </article>
    )
  }
}

