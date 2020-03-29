import React from "react"

//Components
import Layout from "../components/layout"
import ProfileMeta from "../components/pages/profile/profile-meta"

//Stylesheets
// import "../../../styles/components/pages/profile.scss"

export default function Profile() {
  return (
    <Layout pageClass="user-profile">
      <div className="content">
        <ProfileMeta/>
      </div>
    </Layout>
  )
}