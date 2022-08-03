import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : phoptorn.khow@gmail.com</h3>
                <h3>Tel : 090 963 4105</h3>
                <h3>LineID : 0909634105</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;
