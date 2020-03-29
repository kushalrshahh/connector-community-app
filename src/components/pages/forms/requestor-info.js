import React from 'react'
import Input from "../../forms/input"
import Checkbox from "../../forms/checkbox"
//Stylesheets
import "../../../styles/components/pages/forms/requestor-info.scss"

export default class RequestorInfo extends React.Component {

    render() {
      return (
          <>
        <div className="row no-gutters">
            <div className="col-12 col-md">
                <Input type='text' label='What type of help do you need?' name="helpshort" placeholder="2-3 words"/>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-12 col-md">
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
                
                <li class="horiz"> 
                    <Checkbox label='I will pay' name="pay" />
                </li>
                <li class="horiz">
                    <Checkbox label='I am unable to afford services' name="free" />
                </li>
                

            </div>
        </div>

        </>
      )
    }
}