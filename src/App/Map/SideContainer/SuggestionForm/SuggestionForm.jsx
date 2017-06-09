import React, { Component } from "react"
import PropTypes from 'prop-types'
import APIService from "../../../APIService/APIService"
import { Notification } from "react-notification"

const service = new APIService("https://spoken-api.herokuapp.com")

export default class SuggestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pin: {
        name: "",
        email: "",
        label: "",
        description: "",
        category: "",
        message: "",
      },
      suggestionSent: false,
      suggestionFailed: false,
      formNotification: "",
    }
    this.clearedForm = this.state.pin
  }

  handleChange = event => {
    this.setState({
      pin: {
        ...this.state.pin,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = async event => {
    event.preventDefault();
    const pin = {
      pin: {
        ...this.state.pin,
        lat: this.props.suggestionPin.lat,
        lng: this.props.suggestionPin.lng
      }
    }
    try {
      await service.post("/api/v1/suggestion_pins", pin)
      this.submitSuccess()
    } catch(error) {
      this.submitFail(error)
    }
  }

  submitSuccess() {
    this.props.getSuggestions()
    this.props.setSuggestion({})
    this.setState({
      formNotification: "Suggestion sent!",
      suggestionSent: true,
      pin: this.clearedForm
    })
  }

  submitFail(error) {
    this.setState({
      formNotification: error.responseJSON["error"],
      suggestionFailed: true
    })
  }

  deactivate() {
    this.setState({
      suggestionSent: false,
      suggestionFailed: false,
    })
  }

  render() {
    const { suggestionPin } = this.props

    const form = (
      <form onSubmit={this.handleSubmit}>
        <input required type="text" name="name" value={this.state.pin.name}
          onChange={this.handleChange} placeholder="Name" />

        <input required type="email" name="email" value={this.state.pin.email}
          onChange={this.handleChange} placeholder="Email (our eyes only!)" />

        <input required type="text" name="label" value={this.state.pin.label}
          onChange={this.handleChange} placeholder="Label" />

        <textarea required name="description" value={this.state.pin.description}
          onChange={this.handleChange} placeholder="Description" />

        <select required name="category" value={this.state.pin.category}
          onChange={this.handleChange} >
          <option value="">--Category--</option>
          <option value="0">Place to stay</option>
          <option value="1">Cool spot</option>
          <option value="2">Avoid this place</option>
          <option value="3">Bike shop</option>
          <option value="4">Other</option>
        </select>

        <textarea name="message" value={this.state.pin.message}
          onChange={this.handleChange} placeholder="Message (optional)" />

        <p style={{
            display: suggestionPin.lat === undefined ? "block" : "none"
          }}
          value="Drop It!"
        >
          Click the map to drop a pin!
        </p>

        <input type={
            suggestionPin.lat === undefined ? "hidden" : "submit"
          }
          value="Drop It!" />

      </form>
    )
    return (
      <article className="suggestion-form" >
        <h4>Drop a Pin</h4>
        { form }
        <Notification
          isActive={this.state.suggestionSent}
          message={this.state.formNotification}
          onClick={() => this.deactivate() }
          action="✖"
        />
      </article>
    )
  }
}

SuggestionForm.propTypes = {
  suggestionPin: PropTypes.object.isRequired,
  getSuggestions: PropTypes.func.isRequired,
  setSuggestion: PropTypes.func.isRequired
}

