import React, { Component } from "react"
import APIService from "../../APIService/APIService"
import "../../App.css"

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      service: new APIService("https://spoken-api.herokuapp.com"),
      success: false,
      failure: false,
      error: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    
    const messageData = {
      contact: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }
    }

    const response = await this.state.service.post("api/v1/contact", messageData)
    response.status === 201 && this.setState({
      success: true,
      name: "",
      email: "",
      message: "",
    })

    response.status === 400 && this.setState({
      failure: true,
      error: String(response.data)
    })

    setTimeout(() => {
      this.setState({
        success: false,
        failure: false
      })
    }, 3000)
  }

  render() {
    return (
      <article className="component-container contact-form">
        <form onSubmit={this.handleSubmit}>
          <input 
            required type="text" name="name" value={this.state.name} 
            onChange={this.handleChange} placeholder="Your Name"
          />

          <input 
            required type="_replyto" name="email" value={this.state.email} 
            onChange={this.handleChange} placeholder="Email Address"
          />

          <input type="hidden" name="_subject" value="Website contact" />

          <textarea 
            required name="message" value={this.state.message} 
            onChange={this.handleChange} placeholder="What's up?"
          />

          <input type="text" name="_gotcha" style={{display: "none"}} />

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

