import React from "react"

//Components
import Layout from "../../components/layout"
import RequestorText from "../../components/pages/forms/requestor-text"
import RequestorInfo from "../../components/pages/forms/requestor-info"

const RequestorForm = () => (
  <Layout pageClass="form">
      <RequestorText/>
      <RequestorInfo/>
  </Layout>
)

export default RequestorForm