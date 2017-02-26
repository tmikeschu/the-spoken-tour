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
      url: "http://spoken-api.herokuapp.com/api/v1/instagram_photos?api_key="+process.env.REACT_APP_RAILS_KEY,
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
    const photos = this.state.instagramPhotos.map((photo, i) => {
      return (
        <div key={i} >
          <a href={photo.link}>
            <img src={photo.image} alt={photo.caption}/>
          </a>
          <section>
            <article></article>
            <p>"{photo.caption}"</p>
            <p>click image to follow on Instagram</p>
          </section>
        </div>
      )
    });

    return (
      <div className="instagram">
        <article className="photos">
          { photos }
        </article>
      </div>
    );
  }
}
