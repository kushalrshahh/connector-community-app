import React from "react"

//Components
import Layout from "../../components/layout"
import VolunteerText from "../../components/pages/forms/volunteer-text"
import ContactInfo from "../../components/pages/forms/contact-info"
import VolunteerHealth from "../../components/pages/forms/volunteerHealth-text"
import HealthCheck from "../../components/pages/forms/health-check"

const VolunteerForm = () => (
  <Layout pageClass="home">
    <VolunteerText/>
    <ContactInfo/>
    <VolunteerHealth/>
    <HealthCheck/>
  </Layout>
)

export default VolunteerForm