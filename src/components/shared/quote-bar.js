import React from "react"

//Stylesheets
import "../../styles/components/shared/quote-bar.scss"

export default () => {
  let quote = {
    quote: "\"The greatness of a community is most accurately measured by the compassionate actiopns of its members.\"",
    author: "Coretta Scott King"
  }
  return (
    <div className="content quote-bar text-center">
      <strong className="quote">{quote.quote}</strong>
      <p className="author">&ndash;&nbsp;{quote.author}</p>
    </div>
  )
}