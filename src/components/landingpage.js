import  React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from '../img/avatar.png' ;
class Landing  extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src={logo}
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                    <h1>Front-End Developer</h1>
                    <hr/>
                    <p>HTML5 | CSS3 | BOOTSTRAP | JAVASCRIPT | REACT | NODE.JS  </p>
                    <div className="social-links">

                        <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        <a href="https://github.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>      
                        <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square"  aria-hidden="true" />
                        </a>      

                    </div>
                    </div>
                    </Cell>
                </Grid>
            
            </div>
        )
    }
}
export default Landing;