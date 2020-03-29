import React from "react"

//Stylesheets
import "../../../styles/components/pages/home/help-counter.scss"

export default () => (
  <section className="help-counter">
    <div className="content row">
      <div className="col-12 col-sm-4 right">
        <figure className="counter">
          <span>21</span>
          <figcaption>Helped</figcaption>
        </figure>
      </div>
      <div className="col-12 col-sm-4">
        <figure className="counter">
          <span>50</span>
          <figcaption>Need Help</figcaption>
        </figure>
      </div>
      <div className="col-12 col-sm-4 left">
        <figure className="counter">
          <span>17</span>
          <figcaption>Volunteers</figcaption>
        </figure>
      </div>
    </div>
  </section>
)