import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

import Programming from './props/programming';
 
class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 2 };
    }

    toggleCategories() {

        switch (this.state.activeTab) {
            case 0: // Java
                return (
                    <div className="projects-grid">
                        <Programming 
                            projectName="Project Name"
                            projectDescription="Project Description"
                            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fjava-png-png-300x225-java-logo-no-background-300.png&f=1&nofb=1"
                            githubLink="#"      // https://www.github.com
                            codepenLink="#"     // https://codepen.io/
                            livedemoLink="#"
                        />
                    </div>
                )
                break;
            case 1: // Python
                return (
                    <div className="projects-grid">

                    </div>
                )
            case 2: // JavaScript
                return (
                    <div className="projects-grid">
                        <Programming 
                            projectName="Project Name"
                            projectDescription="Project Description"
                            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fjava-png-png-300x225-java-logo-no-background-300.png&f=1&nofb=1"
                            githubLink="#"      // https://www.github.com
                            codepenLink="#"     // https://codepen.io/
                            livedemoLink="#"
                        />
                    </div>
                )
                break;
            case 3: // HTML
                return (
                    <div className="projects-grid">
                        
                    </div>
                )
                break;
            case 4: // CSS
                return (
                    <div className="projects-grid">
                        
                    </div>
                )
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories}</div>
                    </Cell>
                </Grid>
                {this.toggleCategories()}
            </div>
        )
    }
}

export default Projects;