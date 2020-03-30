import React from "react"
import FromHeading from "../../components/forms/formHeading"
//Components
import Layout from "../../components/layout"
import VolunteerInfo from "../../components/pages/forms/volunteer-info"
import Terms from "../../components/pages/forms/terms"

export default class VolunteerForm extends  React.Component {

  render () {

    return (
      <Layout pageClass="form">
    
      <FromHeading text='Volunteer Sign-Up Form'/>
      <Terms/>

      <VolunteerInfo/>

      
    </Layout>
    )
  }

}
