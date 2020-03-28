import React from "react"

//Components
import Button from "../../forms/button"

//Stylesheets
import "../../../styles/components/pages/home/volunteers.scss"

export default () => (
  <section className="volunteers">
    <div className="content row">
      <div className="col-12 col-md-7">
        <div className="list-box">
          <h2>How to Volunteer</h2>
          <ol>
            <li>Sign up (your information is safe with us)</li>
            <li>Select a community you want to serve</li>
            <li>Select people you want to help</li>
            <li>Help and mark the request fulfilled so we know when to thank you :)</li>
          </ol>
          <Button text="Sign Up to Volunteer" link="/sign-up/volunteer"/>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="image-spacer">
          <div className="image-placeholder"><span>Image Placeholder</span></div>
        </div>
      </div>
    </div>
  </section>
)