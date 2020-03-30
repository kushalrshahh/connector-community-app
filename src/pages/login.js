import React from 'react'

//Components
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import TextBox from '../components/forms/textbox'
import Button from '../components/forms/button'
import PageHeading from '../components/shared/page-heading'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'your@email.com',
      phoneNumber: '',
      placeholder:"(123) 456-7891"
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <ModalRoutingContext.Consumer>
        {({modal, closeTo}) => (
          <>
            { 
              modal ? <Link className="close-link" to={closeTo}>X</Link> :
              (<div className="content">
                <h1>COVID Connector Login</h1>
              </div>)
            }
            <div className="content">
              <h2>Welcome back!</h2>
              <p className="p-label">Email Address</p>
              
              <div>
                <TextBox value={this.state.value}  placeholderText={this.state.name} onChange={this.handleChange}/>
              </div>
              <div>
                <p className="p-label">Phone Number:</p>
              </div>
              <div>
                <TextBox value={this.state.phoneNumber} placeholderText={this.state.placeholder} />
              </div>
              <div>
                  <Button text="LOGIN" link="#"/>
              </div>
              <div>
                <Link to="/signupPage" state={{
                  modal: true
                }}>Create Account</Link>
              </div>
              <div>
                <Link to="/communityFormModal" state={{
                  modal: true
                }}>Create New Community</Link>
              </div>
            </div>
          </>
        )}
      </ModalRoutingContext.Consumer>
    );
  }
}