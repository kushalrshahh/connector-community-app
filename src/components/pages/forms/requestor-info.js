import React from 'react'
import Input from "../../forms/input"
import Checkbox from "../../forms/checkbox"
import Sectionheader from "../../forms/sectionheader"
//Stylesheets
import "../../../styles/components/pages/forms/requestor-info.scss"

export default class RequestorInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: 'example',
            lastName: '',
            alias: '',
            aliasCheckbox:'',
            phone1:'',
            phone2:'',
            phone3:'',
            email:'',
            placeholder:"(123) 4567-891"

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    handleChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }
    handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
    }
    render() {
      return (
          <>
           
           <section className="requestor-info">
            <div className="content inner-width">
                <div className="col-12">
                    {/* <div className="content row"> */}
                    <Sectionheader text='Contact Information'></Sectionheader>
                        <div>
           
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
                <Checkbox name="chkName" id="checkName" label="If you are comfortable sharing your name with the ones you help, please check the box" value={this.state.aliasCheckbox}/>
            </div>
            <div className="col-6 col-md">
                <Input type="text" label="Alias" name="alias" placeholder="Alias" maxlength="10" value={this.state.alias} onChange={this.handleChange}/><br></br>
            </div>
        </div>        
          
        <div className="row no-gutters">
            <div className="col-6 col-md">
                {/* <div className="row"> */}
                    {/* <div className="col-6"> */}
                        <Input type="tel" label="Phone Number" name="phone1" maxlength="3"  value={this.state.phone1} onChange={this.handleChange}/>
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
            <Input type='text' label='What type of help do you need?' name="helpshort" placeholder="2-3 words"/>
            </div>
        </div>       
          

        <div className="row ">
            <div className="col-12">
                <Input type='text' label='Descibe in detail' name="detail" placeholder="eg. allergies for meals, what time is your doctors appointment and where, grocerylist,etc"/>
            </div>
        </div>  
          
       

     
        <div className="row no-gutters">
            <div className="col-12 col-md">
                <Input type='text' label='Is there anything else your volunteer should know?' name="firstName" placeholder="How can we better assist you"/>
            </div>
        </div>

        <div className="row no-gutters">
            <div className="col-12 col-md">
                <li class="horiz"> 
                    <Checkbox label='Call' name="call" />
                </li>
                <li class="horiz"> 
                    <Checkbox label='Message' name="message" />
                </li>
                <li class="horiz"> 
                    <Checkbox label='Email' name="email" />
                </li>
            </div>
        </div>

        <div className="row no-gutters">
            <div className="col-12 col-md">
                <p>In case of purchase items</p>
                <li class="horiz"> 
                    <Checkbox label='I will pay' name="pay" />
                </li>
                <li class="horiz">
                    <Checkbox label='I am unable to afford services' name="free" />
                </li>
                

            </div>
        </div>


        </div>

        <section className="requestorHealth-text">
            <div className="col-12 col-md-7">
            <div className="content row">
                <div className="list-box">
                    <h3>Health</h3>
                    <ol>
                    <p>Reminder: We need to know these so our volunteers can help you without worrying. 
                        If you have any questions, please do not take the pledge and email us instead 
                        so we can talk it through. Please check the following boxes to complete the pledge</p>
                    </ol>
                </div>
            </div>
            </div>
        </section>
        <button>submit</button>
        </form>
                
            </div>
        </div>
      </div>
      {/* </div> */}
    </section>


        
        </>
      )
    }
}