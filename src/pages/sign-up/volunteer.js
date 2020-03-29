import React from "react"

//Components
import Layout from "../../components/layout"
import VolunteerText from "../../components/pages/forms/volunteer-text"
import VolunteerInfo from "../../components/pages/forms/volunteer-info"

export default class VolunteerForm extends  React.Component {

  render () {

    return (
      <Layout pageClass="home">
      <div>
  

      <VolunteerText/>

        <VolunteerInfo/>

      </div>
    </Layout>
    )
  }

}
