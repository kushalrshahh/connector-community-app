import React from 'react'
import Input from "../../forms/input"
import Checkbox from "../../forms/checkbox"
import Sectionheader from "../../forms/sectionheader"
import Button from "../../forms/button"
//Stylesheets
import "../../../styles/components/pages/forms/requestor-info.scss"

export default class RequestorInfo extends React.Component {

    state = {
            // firstName: 'example',
            // lastName: '',
            // alias: '',
            // aliasCheckbox:0,
            // phone1:'',
            // phone2:'',
            // phone3:'',
            // email:'',
            placeholder:"(123) 4567-891",
            submitted: false,
            email_comm:0,
            helpshort:'',
            call:0,
            message:0,
            payment:0,
            free:0,
            details_volunteer:'',
            details:''
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
        <section className='requestor-info'>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                <div className="content inner-width">
                    <div className="col-12 ">
                        <div className="content row justify-content-center">
                            <div className="card" id="contact">
                                <div className="card-body">
                                    <Sectionheader text='Contact Information'></Sectionheader>
                                        <form onSubmit={this.handleSubmit}>        
                                            <div>
                                                <div className="row no-gutters">
                                                    <div className="col-6 col-md">
                                                        <Input type="text" label="First Name" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="col-6 col-md">
                                                        <Input type="text" label="Last Name" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                            <div className="row no-gutters">
                                                <div className="col-6 col-md">
                                                    <Checkbox name="chkName" id="checkName" label="If you are comfortable sharing your name with the ones you help, please check the box" checked={this.state.aliasCheckbox} onChange={this.handleCheckboxChange}  />
                                                </div>
            <div className="col-6 col-md">
                <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10" value={this.state.alias} onChange={this.handleChange}/><br></br>
            </div>
        </div>        
          
        <div className="row no-gutters">
            <div className="col-6 col-md">
                {/* <div className="row"> */}
                    {/* <div className="col-6"> */}
                        <Input type="tel" label="Phone Number" name="phone1" maxlength="10"  value={this.state.phone1} onChange={this.handleChange}/>
                    {/* </div> */}
                    {/* <div className="col-4">
                    <Input type="tel" name="phone2" maxlength="3" value={this.state.phone2} onChange={this.handleChange}/>
                    </div>
                    <div className="col-4">
                    <Input type="tel" name="phone3" maxlength="4" value={this.state.phone3} onChange={this.handleChange}/>
                    </div>                    */}

                {/* </div> */}
            </div>
            <div className="col-6 col-md">
            <Input type="email" label="Email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
            </div>
        </div>          
         
        <div className="row no-gutters">
            <div className="col-6 col-md">
            <Input type='text' label='What type of help do you need?' name="helpshort" placeholder="2-3 words" value={this.state.helpshort} onChange={this.handleChange}/>
            </div>
        </div>       
          

        <div className="row ">
            <div className="col-12">
                <Input type='text' label='Descibe in detail' name="detail" placeholder="eg. allergies for meals, what time is your doctors appointment and where, grocerylist,etc" value={this.state.details} onChange={this.handleChange}/>
            </div>
        </div>  
          
       

     
        <div className="row no-gutters">
            <div className="col-12 col-md">
                <Input type='text' label='Is there anything else your volunteer should know?' name="firstName" placeholder="How can we better assist you" value={this.state.details_volunteer} onChange={this.handleChange}/>
            </div>
        </div>

        <div className="row no-gutters">
            <div className="col-12 col-md">
                <li className="horiz"> 
                    <Checkbox label='Call' name="call" checked={this.state.call} onChange={this.handleCheckboxChange} />
                </li>
                <li className="horiz"> 
                    <Checkbox label='Message' name="message" checked={this.state.message} onChange={this.handleCheckboxChange} />
                </li>
                <li className="horiz"> 
                    <Checkbox label='Email' name="email" checked={this.state.email_comm} onChange={this.handleCheckboxChange} />
                </li>
            </div>
        </div>

        <div className="row no-gutters">
            <div className="col-12 col-md">
                <p>In case of purchase items</p>
                <li className="horiz"> 
                    <Checkbox label='I will pay' name="pay"  checked={this.state.payment} onChange={this.handleCheckboxChange}/>
                </li>
                <li className="horiz">
                    <Checkbox label='I am unable to afford services' name="free"  checked={this.state.free} onChange={this.handleCheckboxChange}/>
                </li>
                

            </div>
        </div>


        </div>


        <hr></hr>
                            <section className="volunteerHealth-text">
                                <div className="row">
                                  <div className="col-1"> </div>
                                  <div className=" col-10 list-box">
                                    <Sectionheader text='Health Information'></Sectionheader>
                                      <ol>
                                        <p>Reminder: We need to know these so our volunteers can help you without worrying. 
                        If you have any questions, please do not take the pledge and email us instead 
                        so we can talk it through. Please check the following boxes to complete the pledge </p>
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
        </section>
      )
    }
}