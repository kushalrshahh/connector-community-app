import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

//Components
import Menu from "./menu"
import Img from "gatsby-image"
import { Link } from "gatsby"

//Stylesheets
import "../styles/components/header.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cc-logo-mark.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="content row">
        <div className="col-5">
          <div className="logo">
            <Link to="/">
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="COVID Connector Logo"
              />
              <h2 className="site-name">COVID Connector</h2>
            </Link>
          </div>
        </div>
        <div className="col-7">
          <Menu />
        </div>
      </div>
    </header>
  );
}