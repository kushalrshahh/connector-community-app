import React from 'react'
import Input from "../../forms/input"
import Radio from "../../forms/radio"
import Button from "../../forms/button"
import Checkbox from "../../forms/checkbox"

//Stylesheets
import "../../../styles/components/pages/forms/volunteer-info.scss"

export default class VolunteerInfo extends React.Component {
    state = {
        firstName: "",
        lastName: "",
      }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

    render() {
      return (
          <>
        <form>
        <div>
          <Input type="text" label="Name" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange}/>
          <Input type="text"  name="lastName" placeholder="Last Name"/><br></br>
          <Checkbox name="chkName" id="checkName" label="If you are comfortable sharing your name with the ones you help, please check the box"/>
          <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10"/><br></br>
          <Input type="tel" label="Phone Number" name="phone1" maxlength="3"/>
          <Input type="tel" name="phone2" maxlength="3"/>
          <Input type="tel" name="phone3" maxlength="4"/>
          <Input type="email" label="Email" name="email" placeholder="Email"/><br></br>
        </div>
        <div className="row no-gutters">
            <div className="col-12 col-md">
                <p>Are you able to use personal transport?</p>
                <li class="horiz"> 
                    <Radio label='Yes' name="yes" />
                </li>
                <li class="horiz"> 
                    <Radio label='No - All requests must be walking distance from me.' name="no" />
                </li>
            </div>
        </div>

        <div className="row no-gutters">
            <div className="col-12 col-md">
                <Input type='text' label='What would you like to help with?' name="helpme" placeholder="things you are willing to do. eg. buying groceries or driving to the doctor"/>
            </div>
        </div>
        <Button to="#">Submit</Button>
        </form>
        </>
      )
    }
}