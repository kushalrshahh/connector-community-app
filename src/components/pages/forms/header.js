import React from "react"

//Stylesheets
import "../../../styles/components/pages/forms/header.scss"

export default () => (
  <section className="banner">
    <div className="content inner-width">
      <p className="sub-heading">FORM</p>
      <div className="row no-gutters">
        <div className="col-12 col-md">
          <Button text="Volunteer" link="/sign-up/volunteer"/>
        </div>
        <div className="col-12 col-md spacer"></div>
        <div className="col-12 col-md">
          <Button text="Request Help" link="/sign-up/requestor"/>
        </div>
      </div>
    </div>
  </section>
)