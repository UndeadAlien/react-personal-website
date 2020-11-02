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
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', wdith: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', wdith: '50%'}}/>

                        {/* Address */}
                        <h5>Address</h5>
                        <p>123 Hacker Way Menlo Park, 94025</p>

                        {/* Phone */}
                        <h5>Phone</h5>
                        <p>(123) 123-1234</p>

                        {/* Email */}
                        <h5>Email</h5>
                        <p>Email@email.com</p>

                        {/* Website */}
                        <h5>Web</h5>
                        <p>Website.com</p>

                        <hr style={{borderTop: '3px solid #833fb2', wdith: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h3>Education</h3>
                        <Education 
                            startYear={2012}
                            endYear={2013}
                            schoolName="University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <hr style={{borderTop: '3px solid grey'}} />
                        <h3>Experience</h3>
                        <Experience
                            startYear={2012}
                            endYear={2013}
                            jobName="Experience #1"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2013}
                            jobName="Experience #1"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <Experience
                            startYear={2012}
                            endYear={2013}
                            jobName="Experience #1"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <hr style={{borderTop: '3px solid grey'}} />
                        <h2>Skills</h2>
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