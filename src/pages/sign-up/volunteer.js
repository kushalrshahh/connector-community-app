import React from "react"

//Components
import Layout from "../../components/layout"
import VolunteerText from "../../components/pages/forms/volunteer-text"
import ContactInfo from "../../components/pages/forms/contact-info"
import VolunteerInfo from "../../components/pages/forms/volunteer-info"

const VolunteerForm = () => (
  <Layout pageClass="home">
    <VolunteerText/>
    <ContactInfo/>
    <VolunteerInfo/>
  </Layout>
)

export default VolunteerForm