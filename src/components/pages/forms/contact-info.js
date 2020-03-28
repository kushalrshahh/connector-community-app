import React from 'react'
import Input from "../../forms/input"
//Stylesheets


export default class VolunteerName extends React.Component {


    render() {
      return (
        <div>
          <Input type='text' label='First Name' name="firstName" placeholder="First Name"/>
          <Input type='text' name="lastName" placeholder="Last Name"/>
        </div>
      )
    }
}