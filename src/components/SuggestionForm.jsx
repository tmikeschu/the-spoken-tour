import React, { Component } from 'react';
import $ from 'jquery';
import '../stylesheets/App.css';

export default class SuggestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      description: '',
      category: '',
      message: '',
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
      $("form p").remove();
      $("form").append("<p class='success'>Suggestion made!</p>");
    }).fail(function(error) {
      $("form p").remove();
      $("form").append("<p class='error'>"+error.responseJSON["error"]+"</p>")
    });
  }

  render() {
    return (
      <article className="component-container suggestion-form">
        <form onSubmit={this.handleSubmit}>
          <input required type="text" name="label" value={this.state.label} onChange={this.handleChange} placeholder="Label" />
          <textarea required name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description"/>
          <select required name="category" value={this.state.category} onChange={this.handleChange} >
            <option disabled>--Category--</option>
            <option value="0">Place to stay</option>
            <option value="1">Cool spot</option>
            <option value="2">Avoid this place</option>
            <option value="3">Bike shop</option>
            <option value="4">Other</option>
          </select>
          <textarea name="message" value={this.state.message} onChange={this.handleChange} placeholder="What's up?"/>
          <input type={this.props.suggestionPin.lat === undefined ? "hidden" : "submit"} value="Send" />
        </form>
        <p style={{display: this.props.suggestionPin.lat === undefined ? "initial" : "none"}}>Click the map to drop a pin!</p>
      </article>
    );
  }
}

