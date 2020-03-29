import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import TextBox from '../components/forms/textbox'
import Button from '../components/forms/button'



class ModalExamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Joe Doe / joe.doe@gmail.com',
            phoneNumber: '',
            placeholder:"(123) 4567-891"

        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

render() {
    return (
        <ModalRoutingContext.Consumer>
            {({modal, closeTo}) => (
                <div>
                    {modal ? (
                        <Link to={closeTo}>
                            Close
                        </Link>
                    ) : (
                        <header>
                            <h1>
                                Website Title
                            </h1>
                        </header>
                    )}

                    <h2>Welcome back!</h2>
                    <div>
                    <label>
                        Name / Email Address
                    </label>
                    </div>
                    <div>
                        <TextBox value={this.state.value}  placeholderText={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                    <label htmlFor="phone">Phone number:</label>
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
                    }}>Create an Account</Link>
                    </div>
                    <div>
                        <Link to="/communityFormModal" state={{
                            modal: true
                        }}>Create a new community</Link>
                    </div>
                </div>
            )}
        </ModalRoutingContext.Consumer>
    );
}
}

export default ModalExamplePage