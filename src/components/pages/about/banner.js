import React from "react"

//Components
import PageHeading from "../../shared/page-heading"
import Icon from "../../shared/icon"

//Assets
import Illustration1 from "../../../images/about/cc-illustrations-about-01.svg"
import Illustration2 from "../../../images/about/cc-illustrations-about-02.svg"

//Stylesheets
import "../../../styles/components/pages/about/banner.scss"

export default ({children}) => {
  let  data = {
    page_title: "Lives Helped",
    helped_count: "1,392",
    banner_paragraph: "Whether it may be grocery shopping for someone, giving someone a ride to the hospital, or picking up prescriptions, helping each other has never been easier."
  }
  return (
    <section className="about-banner">
      <div className="content row text-center">
        <div className="col-12 col-lg-3 p-4 p-lg-5 banner-space">
          <Icon>
            <Illustration1/>
          </Icon>
        </div>
        <div className="col-12 col-lg-6 p-lg-5 p-2 text-center">
          <p className="big-green">{data.helped_count}</p>
          <PageHeading text={data.page_title}/>
          <p>{data.banner_paragraph}</p>
        </div>
        <div className="col-12 col-lg-3 p-4 p-lg-5">
          <Icon>
            <Illustration2/>
          </Icon>
        </div>
      </div>
    </section>
  )
}