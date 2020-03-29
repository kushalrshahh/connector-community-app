import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import TextBox from '../components/forms/textbox'
import Button from '../components/forms/button'



class ModalExamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {communityMission: '',
            communityNamePlaceholder: '',
            communityMissionPlaceholder: '',
            communityName: '',
            modal: true
        };

    }

    handleChange(event) {
        this.setState({communityName: event.target.value});
    }

    render() {
       return (
           <ModalRoutingContext.Consumer>
           {({ modal, closeTo }) => (
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
            <div>
            <p>Hello name, we are thrilled for one <br/>more community who is willing to help in this crisis!</p>
            </div>
            <div>
                <label>
                    Community mission
                </label>
            </div>
            <div>
                <TextBox value={this.state.communityMission}  placeholderText={this.state.communityMissionPlaceholder} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="phone">Community name:</label>
            </div>
            <div>
                <TextBox value={this.state.communityName} placeholderText={this.state.communityNamePlaceholder} onChange={this.handleChange}/>
            </div>
            <p>Since this is a new community,not much will be going on</p>
            <p>We need your help to spread the word. Ask those who <br/>
            Ask those who want to help and need help to join Covid Connector
            </p>
            <div>
                <Link to="/communityFormSubmitModal"  communityName = {this.state.communityName} state={{
                    modal: true
                }}>Create Community</Link>
            </div>
        </div>
    )}
    </ModalRoutingContext.Consumer>
       );
    }
}

export default ModalExamplePage