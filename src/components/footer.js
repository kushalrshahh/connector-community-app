import React from "react"

//Components
import Icon from "../components/shared/icon"
import LogoMark from "../images/icons/cc-logomark-colored.svg"

//Stylesheets
import "../styles/components/footer.scss"

export default (props) => {
  return (
    <footer>
      <div className="content row">
        <div className="col-4 logo-mark">
          <Icon>
            <LogoMark/>
          </Icon>
        </div>
        <div className="col-8">
          <p className="help">Need help?</p>
          <p><a className="support-email" href="mailto:info@covid-connectore.com">{props.support}</a></p>
          <p className="copyright">{props.copyright}</p>
        </div>
      </div>
    </footer>
  )
}