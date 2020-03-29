import React from "react"

//Components
import SectionHeading from "../../shared/section-heading"

//Stylesheets
import "../../../styles/components/pages/home/be-heroes.scss"

export default () => (
  <section className="be-heroes">
    <div className="row justify-content-center">
      <div className="heroes-block col-12 col-md-4">
        Block
      </div>
      <div className="heroes-block col-12 col-md-4">
        Block
      </div>
      <div className="heroes-block col-12 col-md-4">
        Block
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