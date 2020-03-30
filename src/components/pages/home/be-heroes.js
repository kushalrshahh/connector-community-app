import React from "react"

//Components
import SectionHeading from "../../shared/section-heading"
import Icon from "../../shared/icon"

//Assets
import HeroImage1 from "../../../images/home/cc-illustrations-home-02.svg"
import HeroImage2 from "../../../images/home/cc-illustrations-home-03.svg"
import HeroImage3 from "../../../images/home/cc-illustrations-home-04.svg"

//Stylesheets
import "../../../styles/components/pages/home/be-heroes.scss"

export default () => (
  <section className="be-heroes">
    <div className="content row justify-content-center">
      <div className="heroes-block col-12 col-md-4">
        <Icon>
          <HeroImage1/>
        </Icon>
      </div>
      <div className="heroes-block col-12 col-md-4">
        <Icon>
          <HeroImage2/>
        </Icon>
      </div>
      <div className="heroes-block col-12 col-md-4">
        <Icon>
          <HeroImage3/>
        </Icon>
      </div>
    </div>
    <div className="row squeezed">
      <div className="col-12 text-center">
        <SectionHeading text="Now is the time to be each other's heroes."/>
      </div>
      <div className="col-12">
        <p className="text-center">Stay updated with the world, and with your community. Sign up to see how you can help, or be helped by your neighbors.</p>
      </div>
    </div>
  </section>
)