import React from "react"

//Components
import Button from "../../forms/button"
import PageHeading from "../page-heading"
import { Link } from 'gatsby'

//Stylesheets
import "../../../styles/components/pages/home/banner.scss"

export default () => (
  <section className="banner">
    <div className="content inner-width">
      <p className="sub-heading">Welcome Text</p>
      <PageHeading text="In Response to COVID-19..." />
      <div className="row no-gutters">
        <div className="col-12 col-md">
          <Button text="Volunteer" link="/sign-up/volunteer"/>
        </div>
        <div className="col-12 col-md spacer"></div>
        <div className="col-12 col-md">
          <Button text="Request Help" link="#"/>
        </div>
      </div>
    </div>
  </section>
)