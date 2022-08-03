import React, { Component } from 'react'

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'ReactJS', 'PHP', 'FastAPI', 'MongoDB'], 
            'mytools': ['VScode', 'Trello', 'Slack',]
        }
    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>

                <h1 className="subtopic">My Tools</h1>
                <ul>
                    {this.state.mytools.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;
