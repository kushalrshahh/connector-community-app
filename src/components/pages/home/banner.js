import React from "react"

//Components
import Button from "../../forms/button"
import PageHeading from "../../shared/page-heading"
import Icon from "../../shared/icon"
import BannerImage from "../../../images/home/cc-illustrations-home-1.svg"

//Stylesheets
import "../../../styles/components/pages/home/banner.scss"

export default () => (
  <section className="banner">
    <div className="content inner-width row justify-content-between">
      <div className="col-12 col-lg-5">
        <div className="banner-image">
          <Icon>
            <BannerImage/>
          </Icon>
        </div>
      </div>
      <div className="col-12 col-lg-7">
      <PageHeading text="Connecting communities at their time of need." />
      <p>During this dire time, it is important that communities are able to communicate with each other for a better understanding of the basic goods and services that are needed. COVIDConnector enables you to use your power as a member of your community.</p>
      <div className="row justify-content-center">
        <div className="col-auto mb-3 mb-md-0 mb-lg-3 mb-xl-0">
          <Button text="Volunteer" link="/sign-up/volunteer"/>
        </div>
        <div className="col-auto">
          <Button text="Request Help" link="/sign-up/requestor"/>
        </div>
      </div>

      </div>
    </div>
  </section>
)