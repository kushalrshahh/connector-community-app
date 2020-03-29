import React from 'react'
import {Link} from 'gatsby'
import {ModalRoutingContext} from 'gatsby-plugin-modal-routing'
import Button from '../components/forms/button'

const ModalExamplePage = (props) => (
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
                <div>
                    <p>Volunteer Name</p>
                    <p>{props.location.communityName} is on and running. <br/>
                    We will try our best to find people in your community who need help.
                    </p>
                    <p>We would also appreciate if you can help us spread the word.</p>
                    <p>Copy this link and share <br/>
                    <Link to="/"> Link</Link>
                    </p>
                </div>
            </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage