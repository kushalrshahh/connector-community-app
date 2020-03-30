import React from "react"

//Components
import SectionHeading from "../../shared/section-heading"
import Icon from "../../shared/icon"

//Assets
import Illustration from "../../../images/about/cc-illustrations-about-03.svg"

//Stylesheets
import "../../../styles/components/pages/about/our-purpose.scss"

export default ({counts}) => {
  let data = {
        section_heading: "Our Purpose",
        paragraph1: "During the novel COVID-19 global epidemic, we are in desperate need of human kindness and selflessness, but we need to do this safely.",
        paragraph2: "We know that there are people out there in need, and those that want to help—what a better way than to start with your community. We created COVIDConnector to help you go the distance during this time of need, and get the help that you need."
      }
  return(
    <section className="our-purpose text-center">
      <div className="content row p-5">
        <div className="col-12 col-md-6 pr-md-5 mb-4 mb-md-0 illustration">
          <Icon>
            <Illustration/>
          </Icon>
        </div>
        <div className="col-12 col-md-6 mt-2 purpose">
          <SectionHeading text={data.section_heading}/>
          <p className="pb-3">{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
        </div>
      </div>
    </section>
  )
}