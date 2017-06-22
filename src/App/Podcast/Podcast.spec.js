import React from 'react'
import { shallow } from "enzyme"
import Podcast from "./Podcast"
import { Link } from 'react-router'

describe("<Podcast />", () => {
  const podcast = shallow(<Podcast />)

  it("renders without crashing", () => {
    expect(podcast).toBeTruthy()
  })

  it("renders the correct content", () => {
    expect(podcast.equals(
      <article className="podcast">
        <p>We are producing a podcast as we pedal south.  We are aiming to release an episode every 2 weeks, this, of course, depends on where in the world we are and whether or not we are able to upload. We'll be covering everything from local culture and interviews, to gear reviews and mechanical mishaps, to personal diatribes and shoutouts to Grandma.  Episodes of The Spoken Tour will be available for download via iTunes, SoundCloud, Stitcher and a couple additional sites.  We hope our maiden voyage into journalism doesn't totally suck, and if you listeners out there have any tips to help make that happen we would love to hear 'em.  Leave us comments about the show on our <Link to="contact">Contact</Link> page.</p>
        <iframe title="Podcast" width="100%" height="600" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/290948600&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </article>
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(podcast.getNodes()).toMatchSnapshot()
    })
  })
})
