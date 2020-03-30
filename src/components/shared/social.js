import React from "react"

//Components
import Icon from "../../components/shared/icon"

//Assets
import Facebook from "../../images/icons/social/facebook.svg"
import Instagram from "../../images/icons/social/instagram.svg"
import Twitter from "../../images/icons/social/twitter.svg"

//Stylesheets
import "../../styles/components/shared/social.scss"

export default (props) => {
  let iconStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px"
  },
  links = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://www.twitter.com/"
  }
  return (
    <div className="social-share">

    {/* Facebook */}
      <a href={links.facebook} target="_blank" rel="noopener noreferrer">
        <Icon sizeStyle={iconStyle}>
          <Facebook/>
        </Icon>
      </a>

    {/* Instagram */}
      <a href={links.instagram} target="_blank" rel="noopener noreferrer">
        <Icon sizeStyle={iconStyle}>
          <Instagram/>
        </Icon>
      </a>

    {/* Twitter */}
      <a href={links.instagram} target="_blank" rel="noopener noreferrer">
        <Icon sizeStyle={iconStyle}>
          <Twitter/>
        </Icon>
      </a>

    </div>
  )
}