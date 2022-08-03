import React, { Component } from 'react'
// import profilepic from '../img/profile.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/292016730_5140971335952667_6502872747328033626_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF2TKQIVvy_l6QAzrfvolTD8mXJcQsqClbyZclxCyoKVpoqDdSXo9EuqgdQFttVYvmzROGWfxqYeDru-sX9bvx6&_nc_ohc=dUcJVBXUg4gAX8fAfvb&_nc_ht=scontent.fbkk22-1.fna&oh=00_AT8bWKatAriwl78SGPAOfz9H6KYrX3q1g0AdddP5GcEMVw&oe=62E0F49B" 
                alt="profile" className="profilepic" />
                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Phoptorn</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
}

export default About;
