import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

export default class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramPhotos: [],
    }
  }

  componentDidMount() {
    let self = this;
    $('#spinner').show();
    $.ajax({
      url: "http://spoken-api.herokuapp.com/api/v1/instagram_photos?api_key="+process.env.REACT_APP_RAILS_KEY,
      method: "GET",
    }).done(function(response) {
      self.setState({
        instagramPhotos: response
      })
      $('#spinner').hide();
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
            <p>(click image to see on Instagram)</p>
          </section>
        </div>
      )
    });

    return (
      <div className="instagram">
        <article className="photos">
          <section>
            <h3>See Our Journey</h3>
            <a href="https://www.instagram.com/thespokentour/">Follow us!<img src="http://www.underconsideration.com/brandnew/archives/instagram_2016_icon.jpg" alt="instagram"/></a>
          </section>
          { photos }
        </article>
      </div>
    );
  }
}
