import React from "react"

//Components
import Icon from "../components/shared/icon"
import SocialShare from "../components/shared/social"

//Assets
import LogoMark from "../images/icons/cc-logomark-colored.svg"

//Stylesheets
import "../styles/components/footer.scss"

export default (props) => {
  return (
    <footer>
      <div className="content row relative">
        <div className="col-4 logo-mark">
          <Icon>
            <LogoMark/>
          </Icon>
        </div>
        <div className="col-8 static">
          <p className="help">Need help?</p>
          <p><a className="support-email" href="mailto:info@covid-connectore.com">{props.support}</a></p>
          <p className="copyright">{props.copyright}</p>
          <SocialShare/>
        </div>
      </div>
    </footer>
  )
}