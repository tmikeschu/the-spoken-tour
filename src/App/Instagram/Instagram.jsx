import React, { Component } from "react"
import APIService from "../APIService/APIService"
import "../App.css"

const apiService = new APIService("https://spoken-api.herokuapp.com")

export default class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramPhotos: []
    }
  }

  componentDidMount() {
    this.getPhotos(apiService)
  }

  async getPhotos(service) {
    const response = await service.get("/api/v1/instagram_photos")
    this.setPhotos(response.data)
    return response
  }

  setPhotos = photos => this.setState({ instagramPhotos: photos || [] })

  render() {
    const photos = this.state.instagramPhotos.map((photo, i) => {
      return (
        <div key={i} >
          <a href={photo.link} target="_blank" rel="noopener noreferrer">
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
        <article className="photos" >
          <section>
            <h3>See Our Journey</h3>
            <a href="https://www.instagram.com/thespokentour/" target="_blank" rel="noopener noreferrer">Follow us!<img src="http://www.underconsideration.com/brandnew/archives/instagram_2016_icon.jpg" alt="instagram"/></a>
          </section>
          { photos }
        </article>
      </div>
    );
  }
}
