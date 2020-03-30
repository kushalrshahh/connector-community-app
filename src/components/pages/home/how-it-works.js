import React from "react"

//Components
import Button from "../../forms/button"
import SectionHeading from "../../shared/section-heading"
import IconAboveText from "../../shared/icon-above-text"

//Assets
import IconPencil from "../../../images/icons/basic/pencil-edit.svg"
import IconGlobe from "../../../images/icons/basic/globe.svg"
import IconProfile from "../../../images/icons/basic/user.svg"
import IconCircleCheck from "../../../images/icons/basic/circle-checked.svg"

//Stylesheets
import "../../../styles/components/pages/home/how-it-works.scss"

export default () => {
  //TODO: Refactor with array map.
  let text = {
    section_title: "How does it work?",
    title1: "1. Sign Up",
    para1: "All we need is your essential contact information to make sure you are connected with your network.",
    title2: "2. Select community",
    para2: "We help communicate requests by classifying them per geographic community.",
    title3: "3. Match with people",
    para3: "Whether you need help or are helping, we are here to help you get connected.",
    title4: "4. Fulfill requests",
    para4: "We record you as an active  member of your community. Stay updated through your new network.",
  }
  return (
    <section className="how-it-works text-center">
      <div className="content">
        <SectionHeading text={text.section_title}/>
        <div className="row icon-features">
          <div className="col-12 col-md-6 col-xl-3">
            <IconAboveText featureText={text.title1} paraText={text.para1}>
              <IconPencil/>
            </IconAboveText>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <IconAboveText featureText={text.title2} paraText={text.para2}>
              <IconGlobe/>
            </IconAboveText>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <IconAboveText featureText={text.title3} paraText={text.para3}>
              <IconProfile/>
            </IconAboveText>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <IconAboveText featureText={text.title4} paraText={text.para4}>
              <IconCircleCheck/>
            </IconAboveText>
          </div>
        </div>
        <Button text="Learn More" link="/about"/>
      </div>
    </section>
  )
}