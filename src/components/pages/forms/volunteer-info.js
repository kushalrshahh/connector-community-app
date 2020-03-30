import React from 'react'
import Input from "../../forms/input"
import Radio from "../../forms/radio"
import Checkbox from "../../forms/checkbox"
import Sectionheader from "../../forms/sectionheader"
import Button from "../../forms/button"

//Stylesheets
import "../../../styles/components/pages/forms/volunteer-info.scss"

export default class VolunteerInfo extends React.Component {

    state={ firstName: 'example',
    lastName: '',
    alias: '',
    aliasCheckbox:0,
    phone1:'',
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
        <section className='volunteer-info'>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
              <div className="content inner-width">
                <div className="col-12">
                  <div className="content row justify-content-center">
                    <div className="card" id='volunteer-info-card'>
                      <div className="card-body">
                        <div>
                          <Sectionheader text='Contact Information'></Sectionheader>
                            <form onSubmit={this.handleSubmit}>
                              <div className="row inputgroup">
                                <div className="col-6 col-md inputselection">
                                  <Input type="text" label="First Name" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                                </div>
                                <div className="col-6 col-md">
                                    <Input type="text"   label="Last Name" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                                </div> 
                               </div>
                              <div className="row inputgroup">
                                <div className="col-6 col-md">
                                  <Checkbox name="chkName" id="checkName" label="If you are comfortable sharing your name with the ones you help, please check the box" value={this.state.aliasCheckbox}/>
                                </div>
                                <div className="col-6 col-md">
                                  <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10" value={this.state.alias} onChange={this.handleChange}/>
                                </div>
                              </div>
                              <div className="row inputgroup">
                                <div className="col-6 col-md">
                                  <Input type="tel" label="Phone Number" name="phone1" maxlength="3"  value={this.state.phone1} onChange={this.handleChange}/>
                                </div>
                                <div className="col-6 col-md">
                                  <Input type="email" label="Email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                              </div>
                              <div className="row inputgroup">
                                <p>Are you able to use personal transport?</p>
                              </div>
                              <fieldset>
                                <div className="row radio">
                                        <Radio label='Yes' name="yes"  checked={this.state.havetransport} onChange={this.handleCheckboxChange}  />
                                        <Radio label='No - All requests must be walking distance from me.'checked={this.state.donthavetransport} onChange={this.handleCheckboxChange} name="no" />
                                </div> 
                              </fieldset>                            


                            <div className="row inputgroup">
                              <div className="col-12 col-md txtbox">
                                  <Input type='text' label='What would you like to help with?' name="helpme" placeholder="things you are willing to do. eg. buying groceries or driving to the doctor" value={this.state.help_desc} onChange={this.handleChange}/>
                              </div>
                            </div>

                            <div className="row inputgroup">
                              <div className="col-12 col-md txtbox">
                                  <Input type='text' label='Do you have past Experience in volunteering? If so, please describe?' name="exp" placeholder="Where and what did you help with" value={this.state.help_desc} onChange={this.handleChange}/>
                              </div>
                            </div>

                            <hr></hr>
                            <section className="volunteerHealth-text">
                                <div className="row">
                                  <div className="col-1"> </div>
                                  <div className=" col-10 list-box">
                                    <Sectionheader text='Health Information'></Sectionheader>
                                      <ol>
                                        <p>Reminder: you must be healthy to be a volunteer. If you have any questions, please 
                                          do not take the pledge and email us instead so we can talk it through. 
                                          Please check the following boxes to complete the Volunteer Pledge. </p>
                                      </ol>
                                      <Checkbox name="symptoms" label="I am not exhibting any symptoms of COVID-19 (cough, feaver, etc.)" value={this.state.aliasCheckbox}/>
                                      <Checkbox name="country" label="I have not traveled out-of-country in the past 14 days" value={this.state.aliasCheckbox}/>
                                      <Checkbox name="contactCovid" label="I have not come in contact with a sick person in the past 14 days" value={this.state.aliasCheckbox}/>
                                      <Checkbox name="socialdistancing" label="I have been practicing social distancing" value={this.state.aliasCheckbox}/>
                                    </div>
                                </div>

                                <div className='row ageConfirm'>
                                  <div className='col-2'> </div>
                                    <div className="col-8"> 
                                      <Checkbox name="above18" label="Please confirm you are above 18" value={this.state.aliasCheckbox}/>
                                    </div>
                                </div>
                            </section>
                            <div className='row'>
                              <div className='col-4'></div>
                              <div className='col-4'>
                              <Button to='/' text='Submit' >Submit</Button>
                              </div>
                            
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      )
    }
}