import React, { Component } from 'react';
import $ from 'jquery';
import { Notification } from 'react-notification';
import '../stylesheets/App.css';

export default class SuggestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      description: '',
      category: '',
      message: '',
      suggestionSent: false,
      suggestionFailed: false,
      formNotification: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let self = this;
    $.ajax({
      url: "http://spoken-api.herokuapp.com/api/v1/suggestion_pins?api_key="+process.env.REACT_APP_RAILS_KEY,
      method: "POST",
      data: {
        pin: {
          label: this.state.label,
          description: this.state.description,
          category: this.state.category,
          lat: this.props.suggestionPin.lat,
          lng: this.props.suggestionPin.lng,
          message: this.state.message,
        }
      },
      dataType: "json"
    }).done(function(data) {
      self.props.getSuggestions();
      self.props.setSuggestion({});
      self.setState({
        formNotification: "Suggestion sent!",
        suggestionSent: true,
      });
    }).fail(function(error) {
      self.setState({
        formNotification: error.responseJSON["error"],
        suggestionFailed: true,
      });
    });
  }

  deactivate() {
    this.setState({
      suggestionSent: false,
      suggestionFailed: false,
    })
  }

  render() {
    return (
      <article className="suggestion-form">
        <form onSubmit={this.handleSubmit}>
          <input required type="text" name="label" value={this.state.label} onChange={this.handleChange} placeholder="Label" />
          <textarea required name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description"/>
          <select required name="category" value={this.state.category} onChange={this.handleChange} >
            <option value="">--Category--</option>
            <option value="0">Place to stay</option>
            <option value="1">Cool spot</option>
            <option value="2">Avoid this place</option>
            <option value="3">Bike shop</option>
            <option value="4">Other</option>
          </select>
          <textarea name="message" value={this.state.message} onChange={this.handleChange} placeholder="What's up?"/>
          <input type={this.props.suggestionPin.lat === undefined ? "hidden" : "submit"} value="Drop It!" />
        </form>
        <p style={{display: this.props.suggestionPin.lat === undefined ? "block" : "none"}}>Click the suggestion map to drop a pin!</p>
        <Notification
          isActive={this.state.suggestionSent}
          message={this.state.formNotification}
          onClick={() => this.deactivate() }
          action="✖"
        />
      </article>
    );
  }
}

