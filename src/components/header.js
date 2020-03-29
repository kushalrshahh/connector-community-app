import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"

//Components
import Menu from "./menu"
import Logo from "../images/icons/cc-logo-full-color.svg"
import { Link } from "gatsby"

//Stylesheets
import "../styles/components/header.scss"

export default () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "cc-logo-mark.png" }) {
  //       childImageSharp {
  //         fixed(height: 40) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  //   `)
    return (
      <header>
      <div className="content row no-gutters">
        <div className="col-12 col-lg-5">
          <div className="logo">
            <Link to="/">
              <Logo/>
            </Link>
          </div>
        </div>
        <div className="col-lg-7">
          <Menu />
        </div>
      </div>
    </header>
  );
}