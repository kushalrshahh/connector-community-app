import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//Components
import Button from "../../forms/button"
import CommunityList from "../../shared/community-list"
import Img from "gatsby-image"

//Stylesheets
import "../../../styles/components/pages/profile/profile-meta.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-image-placeholder_.png" }) {
        childImageSharp {
          fixed(height: 80, width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className="profile-meta">
      <div className="content">
        <figure className="row">
          <div className="profile-image col-12">
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Profile Image"
              />
          </div>
          <div className="col-12">
            User Information
          </div>
          <div className="now-need-help col-12">
            <Button link="#" text="I now need help" />
          </div>
          <CommunityList communities="" />
        </figure>
      </div>
    </section>
  )
}