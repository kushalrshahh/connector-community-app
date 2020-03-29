import React from "react"

//Components
import Layout from "../../components/layout"
import RequestorText from "../../components/pages/forms/requestor-text"
import RequestorInfo from "../../components/pages/forms/requestor-info"
import Terms from "../../components/pages/forms/terms"
const RequestorForm = () => (
  <Layout pageClass="form">
      <Terms />

      <RequestorInfo/>
  </Layout>
)

export default RequestorForm