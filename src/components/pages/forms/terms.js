import React from 'react'
import Sectionheader from "../../forms/sectionheader"

import Check from "../../forms/checkbox"

//Stylesheets
import "../../../styles/components/pages/forms/terms.scss"


export default () => (

    <section className="terms-conditions">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        <div className="content inner-width">
          <div className="col-12 ">
            <div className="content row justify-content-center">
                <div className="card" id="terms-card">
                  <div className="card-body">
                    <div className='terms'>
                        <Sectionheader text='Terms & Conditions'></Sectionheader>
                        <p>We care about you as much as those who need your help. Please fill the form below to help us make sure that we are keeping you and your community safe</p>
                        <p>Your information is safe with us — we will be using your contact info to connect you with the people who you are willing to help. Please check that you have understood our terms and conditions, and continue to fill the form below.</p>
                        <Check className="term" label='I have read and understood the terms outlined above.' name="chk"/>
                    </div>

                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>

  )