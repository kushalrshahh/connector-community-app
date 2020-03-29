import React from "react"

//Components
import Layout from "../../components/layout"
import VolunteerText from "../../components/pages/forms/volunteer-text"
import ContactInfo from "../../components/pages/forms/contact-info"
import VolunteerInfo from "../../components/pages/forms/volunteer-info"

export default class VolunteerForm extends  React.Component {

  render () {

    return (
      <Layout pageClass="home">
      <div>
  

      <VolunteerText/>
      <form>
        <ContactInfo/>
        <VolunteerInfo/>
      <button type="submit">Submit</button>
      </form>
      </div>
    </Layout>
    )
  }

}
