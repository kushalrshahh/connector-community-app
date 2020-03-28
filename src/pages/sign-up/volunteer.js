import React from "react"

//Components
import Layout from "../../components/layout"
import VolunteerText from "../../components/forms/volunteer-text"
import VolunteerName from "../../components/forms/volunteer-name"

const VolunteerForm = () => (
  <Layout pageClass="home">
    <VolunteerText/>
    <VolunteerName/>
  </Layout>
)

export default VolunteerForm