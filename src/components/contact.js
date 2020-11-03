import React, { Component } from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/* Left Side */}
                    <Cell col={6}>
                        <h2>Connor Hutchinson</h2>
                        <p style={{weight: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Cell>
                    {/* Right Side */}
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                {/* Phone Number */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square-alt" aria-hidden="true" />
                                        (123) 123-1234
                                    </ListItemContent>
                                </ListItem>
                                {/* Email */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-envelope-square" aria-hidden="true" />
                                        EmailAddress@email.com
                                    </ListItemContent>
                                </ListItem>
                                {/* LinkedIn */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-linkedin" aria-hidden="true" />
                                        LinkedIn Username
                                    </ListItemContent>
                                </ListItem>
                                {/* Discord */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-discord" aria-hidden="true" />
                                        Discord Username
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;