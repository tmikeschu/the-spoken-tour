import React, { Component } from 'react';
import $ from 'jquery';
import '../../App.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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
    $("input").prop('required',true);
    $("input[name='_gotcha']").prop('required',false);
    $("textarea").prop('required',true);

    $.ajax({
      url: "https://formspree.io/thespokentour@gmail.com",
      method: "POST",
      data: {
        name: this.state.name,
        _replyto: this.state.email,
        message: this.state.message,
      },
      dataType: "json"
    }).done(function(data) {
      $("form p").remove();
      $("form").append("<p class='success'>Message sent!</p>");
    }).fail(function(error) {
      $("form p").remove();
      $("form").append("<p class='error'>"+error.responseJSON["error"]+"</p>")
    });
  }

  render() {
    return (
      <article className="component-container contact-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Your Name"/>
          <input type="_replyto" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email Address"/>
          <input type="hidden" name="_subject" value="Website contact" />
          <textarea name="message" value={this.state.message} onChange={this.handleChange} placeholder="What's up?"/>
          <input type="text" name="_gotcha" style={{display: "none"}} />
          <input type="submit" value="Send" />
        </form>
        <p>*Please allow ample time for a response as we are busy bicycling 15,000 miles.</p>
      </article>
    );
  }
}
