import React from "react"

//Components
import Layout from "../../components/layout"
import VolunteerText from "../../components/pages/forms/volunteer-text"
import VolunteerInfo from "../../components/pages/forms/volunteer-info"
import Terms from "../../components/pages/forms/terms"

export default class VolunteerForm extends  React.Component {

  render () {

    return (
      <Layout pageClass="home">
      <div>
  
      <Terms/>

      <VolunteerInfo/>

      </div>
    </Layout>
    )
  }

}
