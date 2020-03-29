import React from "react"

//Components
import Button from "../../forms/button"
import SectionHeading from "../../shared/section-heading"

//Stylesheets
import "../../../styles/components/pages/home/how-it-works.scss"

export default () => (
  <section className="how-it-works text-center">
    <div className="content">
      <SectionHeading text="How does it work?"/>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3">
          <figure className="icon-block sign-up">
            <div>Icon</div>
            <strong>1. Sign up</strong>
            <figcaption>All we need is your essential contact information to make sure you are connected with your network.</figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <figure className="icon-block sign-up">
            <div>Icon</div>
            <strong>2. Select community</strong>
            <figcaption>We help communicate requests by classifying them per geographic community.</figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <figure className="icon-block sign-up">
            <div>Icon</div>
            <strong>3. Match with people</strong>
            <figcaption>Whether you need help or are helping, we are here to help you get connected.</figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <figure className="icon-block sign-up">
            <div>Icon</div>
            <strong>4. Fulfill requests</strong>
            <figcaption>We record you as an active  member of your community. Stay updated through your new network.</figcaption>
          </figure>
        </div>
      </div>
      <Button text="Learn More" link="#"/>
    </div>
  </section>
)