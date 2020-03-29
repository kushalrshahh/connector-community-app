import React from 'react'
import Input from "../../forms/input"
import Radio from "../../forms/radio"
import Button from "../../forms/button"
import Checkbox from "../../forms/checkbox"

//Stylesheets
import "../../../styles/components/pages/forms/volunteer-info.scss"

export default class VolunteerInfo extends React.Component {
    state={ firstName: 'example',
    lastName: '',
    alias: '',
    aliasCheckbox:0,
    phone1:'',
    phone2:'',
    phone3:'',
    email:'',
    donthavetransport:0,
    havetransport:0,
    submitted: false,
    email_comm:0,
    help_desc:''
};

handleChange = event => {
    const { state } = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };
  onSubmit = () => {
    const {
      state: { firstName, lastName,alias, aliasCheckbox, phone1, phone2, phone3,email}
    } = this.state;
    let err = {};


    this.setState({ errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        this.setState({ submitted: true });
      }
    });
  };

  handleCheckboxChange = event =>
  this.setState({ checked: event.target.checked });


    render() {
      return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <div className="card">
        <div className="card-body">
        <form onSubmit={this.handleSubmit}>
        <div>
        <div className="row no-gutters">
            <div className="col-6 col-md">
                <Input type="text" label="Name" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
            </div>
            <div className="col-6 col-md">
                <Input type="text"  name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/><br></br>
            </div>
         
          
        </div>
          <Checkbox name="chkName" id="checkName" label="If you are comfortable sharing your name with the ones you help, please check the box" value={this.state.aliasCheckbox}/>
          <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10" value={this.state.alias} onChange={this.handleChange}/><br></br>

          <Input type="tel" label="Phone Number" name="phone1" maxlength="3"  value={this.state.phone1} onChange={this.handleChange}/>
          <Input type="tel" name="phone2" maxlength="3" value={this.state.phone2} onChange={this.handleChange}/>
          <Input type="tel" name="phone3" maxlength="4" value={this.state.phone3} onChange={this.handleChange}/>

          <Input type="email" label="Email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/><br></br>
        </div>
        <div className="row no-gutters">
            <div className="col-12 col-md">
                <p>Are you able to use personal transport?</p>
                <li className="horiz"> 
                    <Radio label='Yes' name="yes"  checked={this.state.havetransport} onChange={this.handleCheckboxChange}  />
                </li>
                <li className="horiz"> 
                    <Radio label='No - All requests must be walking distance from me.'checked={this.state.donthavetransport} onChange={this.handleCheckboxChange} name="no" />
                </li>
            </div>
        </div>

        <div className="row no-gutters">
            <div className="col-12 col-md">
                <Input type='text' label='What would you like to help with?' name="helpme" placeholder="things you are willing to do. eg. buying groceries or driving to the doctor" value={this.state.help_desc} onChange={this.handleChange}/>
            </div>
        </div>
        <button >Submit</button>
        </form>
        </div>
        </div>
        </div>
      )
    }
}