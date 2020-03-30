import React from "react"

//Components
import Layout from "../../components/layout"
import FromHeading from "../../components/forms/formHeading"
import RequestorInfo from "../../components/pages/forms/requestor-info"
import Terms from "../../components/pages/forms/terms"
const RequestorForm = () => (
  <Layout pageClass="form">
    <FromHeading text='Help Request Sign-Up Form'/>
      <Terms/>
      <RequestorInfo/>
  </Layout>
)

export default RequestorForm