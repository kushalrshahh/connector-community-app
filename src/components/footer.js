import React from "react"

//Stylesheets
import "../styles/components/footer.scss"

export default (props) => {
  return (
    <footer>
      <div className="content row justify-content-center">
        <div className="col-4">
          Logo
        </div>
        <div className="col-8">
          <p>Need help?</p>
          <p><a href="mailto:info@covid-connectore.com">{props.support}</a></p>
          <p>{props.copyright}</p>
        </div>
      </div>
    </footer>
  )
}