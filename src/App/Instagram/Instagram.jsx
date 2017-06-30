import React, { Component } from "react"
import APIService from "../APIService/APIService"

const apiService = new APIService("https://spoken-api.herokuapp.com")

export default class Instagram extends Component {
  componentDidMount() {
    this.props.actions.fetchPhotos(apiService)
  }

  render() {
    const photos = this.props.photos.map((photo, i) => {
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
    })

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
    )
  }
}
