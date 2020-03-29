import React, { Component } from 'react';
import Input from "../../forms/input"
//Stylesheets


class VolunteerName extends Component {

 
    render() {
      const { firstName , lastName } = this.props;
      //create constructor 
      return (
       <div>
          <Input type="text" label="Name" name="firstName" placeholder="First Name" value={firstName}/>
          <Input type="text"  name="lastName" placeholder="Last Name" value={lastName}/><br></br>
          <Input type="checkbox" label="If you are comfortable sharing your name with the ones you help, please check the box" name="chkName" id="checkName"/>
          <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10"/><br></br>
          <Input type="tel" label="Phone Number" name="phone1" maxlength="3"/>
          <Input type="tel" name="phone2" maxlength="3"/>
          <Input type="tel" name="phone3" maxlength="4"/>
          <Input type="email" label="Email" name="email" placeholder="Email"/><br></br>
        </div>
      );
    }
    }


export default VolunteerName;