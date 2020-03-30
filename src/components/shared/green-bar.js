import React from "react"

//Stylesheets
import "../../styles/components/shared/social.scss"

export default ({children}) => {
  let barStyle = {
    backgroundColor: "#056839",
    padding: "60px 0"
  }
  return (
    <div className="green-bar" style={barStyle}>
      {children}
    </div>
  )
}