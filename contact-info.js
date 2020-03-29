import React from 'react'
import Input from "../../forms/input"
//Stylesheets


export default class VolunteerName extends React.Component {

    render() {
      return (
        <form>
          <Input type="text" label="Name" name="firstName" placeholder="First Name"/>
          <Input type="text"  name="lastName" placeholder="Last Name"/><br></br>
          <Input type="checkbox" label="If you are comfortable sharing your name with the ones you help, please check the box" name="chkName" id="checkName"/>
          <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10"/><br></br>
          <Input type="tel" label="Phone Number" name="phone1" maxlength="3"/>
          <Input type="tel" name="phone2" maxlength="3"/>
          <Input type="tel" name="phone3" maxlength="4"/>
          <Input type="email" label="Email" name="email" placeholder="Email"/><br></br>
        </form>
      )
    }
}