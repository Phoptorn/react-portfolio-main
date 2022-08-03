import React, { Component } from 'react';
// import profilepic from '../img/profile.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/292016730_5140971335952667_6502872747328033626_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF2TKQIVvy_l6QAzrfvolTD8mXJcQsqClbyZclxCyoKVpoqDdSXo9EuqgdQFttVYvmzROGWfxqYeDru-sX9bvx6&_nc_ohc=dUcJVBXUg4gAX8fAfvb&_nc_ht=scontent.fbkk22-1.fna&oh=00_AT8bWKatAriwl78SGPAOfz9H6KYrX3q1g0AdddP5GcEMVw&oe=62E0F49B" 
                alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Phoptorn', 'I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;