import React, { Component } from 'react';

import { Grid, Cell, Chip, BottomNavigation, FavoriteIcon } from 'react-mdl';

import AvatarImage from '../images/Logo.png';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={ AvatarImage }
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr />
                            <p>Java | Python | Javascript | React | HTML | CSS | MySQL</p>
                            
                            <div className="social-links">
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/hello-connor/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github*/}
                                <a href="https://github.com/UndeadAlien" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>

                                {/* HackerRank*/}
                                <a href="https://www.hackerrank.com/UndeadAlien" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-hackerrank" aria-hidden="true" />
                                </a>

                                {/* FreeCodeCamp*/}
                                <a href="https://www.freecodecamp.org/undeadalien" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-free-code-camp" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;