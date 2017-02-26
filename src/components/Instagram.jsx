import React, { Component } from 'react';
import $ from 'jquery';
import '../stylesheets/App.css';

export default class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramPhotos: [],
    }
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "http://spoken-api.herokuapp.com/api/v1/route_pins/instagram_photos?api_key="+process.env.REACT_APP_RAILS_KEY,
      method: "GET",
    }).done(function(response) {
      self.setState({
        instagramPhotos: response
      })
    }).fail(function(error) {
      console.error("No");
    });
  }

  render() {
    return (
      <div className="instagram">
        <h2>Instagram</h2>
        <article className="photos">

        </article>
      </div>
    );
  }
}
