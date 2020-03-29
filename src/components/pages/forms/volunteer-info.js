import React from 'react'
import Input from "../../forms/input"
import Radio from "../../forms/radio"


//Stylesheets
import "../../../styles/components/pages/forms/volunteer-info.scss"

export default class VolunteerInfo extends React.Component {

    render() {
      return (
          <>
        <div className="row no-gutters">
            <div className="col-12 col-md">
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

        </>
      )
    }
}