import React from 'react'
import Check from "../../forms/checkbox"
//Stylesheets


export default class HealthCheck extends React.Component {

    render() {
      return (
        <form>
          <Check type="checkbox" name="chkHealth" id="checkHealth" label="I am not exhibiting any symptoms of COVID-19 (cough, fever, etc.)"/>
          <Check type="checkbox" name="chkHealth" id="checkHealth" label="I have not traveled out-of-country in the past 14 days"/>
          <Check type="checkbox" name="chkHealth" id="checkHealth" label="I have not come in contact with a sick person in the past 14 days"/>
          <Check type="checkbox" name="chkHealth" id="checkHealth" label="I have been practicing social distancing"/>
        </form>
      )
    }
}