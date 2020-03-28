import React from "react"

//Components
import Button from "../../forms/button"

//Stylesheets
import "../../../styles/components/pages/home/requesting-help.scss"

export default () => (
  <section className="requesting-help">
    <div className="content row">
      <div className="col-12 col-md-5">
        <div className="image-spacer">
          <div className="image-placeholder"><span>Image Placeholder</span></div>
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="list-box">
          <h2>How to Request Help</h2>
          <ol>
            <li>Sign up (your information is safe with us)</li>
            <li>View your request and add if you need to</li>
            <li>As soon as someone volunteers to help you, you will see their name and they will contact you</li>
            <li>Once you receive help, confirm the request was fulfilled by the volunteer so we can thank them :)</li>
          </ol>
          <Button text="Sign Up to Request Help" link="#"/>
        </div>
      </div>
    </div>
  </section>
)