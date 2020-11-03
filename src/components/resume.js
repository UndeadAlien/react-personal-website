import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './props/education';
import Experience from './props/experience';
import Skills from './props/skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    {/* Left Side */} 
                    <Cell col={4}>
                        <h2>Connor Hutchinson</h2>
                        <h4 style={{color: 'black'}}>Software Engineer</h4>
                        <hr style={{borderTop: '2px solid gray', wdith: '50%'}}/>
                        <p>
                            -ABOUT ME-
                        </p>
                        <hr style={{borderTop: '2px solid gray', wdith: '50%'}}/>

                        {/* Location */}
                        <h5>Location</h5>
                        <p>Chicago, IL</p>

                        {/* Phone */}
                        <h5>Phone</h5>
                        <p>(123) 123-1234</p>

                        {/* Email */}
                        <h5>Email</h5>
                        <p>WorkHutchC@gmail.com</p>

                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h4>Education</h4>
                        <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName="Florida Southwestern"
                            schoolDescription="Associates in Science - Emergency Medicine"
                        />
                        <hr style={{borderTop: '3px solid grey'}} />
                        <h4>Work History</h4>
                        <Experience
                            startYear={2018}
                            endYear={2020}
                            jobLocation="Yard of Ale"
                            jobName="Head Barback"
                            jobDescription="Maintained a sanitary workplace abiding to Food and Drug Regulations all while providing excellent customer service while executing requests from bartenders and guest."
                        />
                        <Experience
                            startYear={2015}
                            endYear={2018}
                            jobLocation="Fergs Live"
                            jobName="Barback"
                            jobDescription="Setup and tore down event bars for sporting events. 
                            Made sure guests, bartender, and band members had what was needed to make the event run smoothly."
                        />
                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobLocation="American Medical Response"
                            jobName="Medic"
                            jobDescription="Provided medical assistance during emergency situations, such as CPR, AED, prevent shock, control severe bleeding, prevent spinal damage."
                        />
                        <Experience
                            startYear={2013}
                            endYear={2015}
                            jobLocation="Cheddars Scratch Kitchen"
                            jobName="Bartender"
                            jobDescription="Verify identification and age requirements of customers, 
                            mixed traditional and creative cocktails, 
                            processed payments, 
                            santitized glasses and the bar, 
                            and built a rappor with regular customers to create a positive atmosphere."
                        />
                        <hr style={{borderTop: '3px solid grey'}} />
                        <h4>Skills</h4>
                        <Skills
                            skill="Python"
                            progress={80}
                        />
                        <Skills
                            skill="Java"
                            progress={60}
                        />
                        <Skills
                            skill="HTML"
                            progress={80}
                        />
                        <Skills
                            skill="CSS"
                            progress={80}
                        />
                        <Skills
                            skill="Javascript"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;