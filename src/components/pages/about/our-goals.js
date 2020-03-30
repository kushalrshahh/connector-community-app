import React from "react"

//Components
import IconAboveText from "../../shared/icon-above-text"

//Assets
import MapPin from "../../../images/icons/maps/pin-add.svg"
import Arrow from "../../../images/icons/maps/direction-45.svg"
import Globe from "../../../images/icons/maps/globe.svg"

//Stylesheets
import "../../../styles/components/pages/about/our-goals.scss"

export default ({counts}) => {
  let text = {
    section_title: "How does it work?",
    title1: "Giving Individuals Purpose",
    para1: "We give people opportunities to connect with strangers that are willing to help one another. We give hope to those in need, and strength to those who are weak.",
    title2: "Going the distance (despite social distancing)",
    para2: "In helping one another and abiding by social distancing, we are still able to focus on the things we can do to make a difference.",
    title3: "Making the world a smaller place.",
    para3: "We use technology help overcome financial, medical, and physical boundaries. We focus on 1 goal: to stay together."
  }
  return(
    <section className="our-goals text-center">
      <div className="content row">
        <div className="col-12 col-md-4 p-md-4">
          <IconAboveText featureText={text.title1} paraText={text.para1}>
            <MapPin/>
          </IconAboveText>
        </div>
        <div className="col-12 col-md-4 p-md-4">
          <IconAboveText featureText={text.title2} paraText={text.para2}>
            <Arrow/>
          </IconAboveText>
        </div>
        <div className="col-12 col-md-4 p-md-4">
          <IconAboveText featureText={text.title3} paraText={text.para3}>
            <Globe/>
          </IconAboveText>
        </div>
      </div>
    </section>
  )
}