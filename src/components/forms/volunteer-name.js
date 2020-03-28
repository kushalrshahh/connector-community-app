import React from 'react'

//Stylesheets


export default class VolunteerName extends React.Component {
    state = {
      firstName: "",
      lastName: "",
    }

    render() {
      return (
        <form>
          <h2 className="content column">Name</h2>
          <label>
            <input type="text" name="firstName" placeholder="First Name"/>
          </label>
          <label><div className="content row">
            <input type="text" name="lastName" placeholder="Last Name"/>
          </div>
          </label>
        </form>
      )
    }
}