import React from 'react'
import TextInput from "../../forms/textInput"
//Stylesheets


export default class VolunteerName extends React.Component {
    state = {
      firstName: "",
      lastName: "",
    }

    render() {
      return (
        <form>
          <TextInput label='First Name' name="firstName" placeholder="First Name"/>
          <TextInput name="lastName" placeholder="Last Name"/>
        </form>
      )
    }
}