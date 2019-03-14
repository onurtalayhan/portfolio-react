import  React, { Component } from 'react';
import logo from '../img/avatar.png' ;

class About extends Component {
    render(){
        return(
            <div><h1>About Page</h1>
            <img
                        src={logo}
                        alt="avatar"
                        className="avatar-img"
                    />
            </div>
        )
    }
}
export default About;
