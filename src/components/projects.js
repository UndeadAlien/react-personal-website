import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        switch (this.state.activeTab) {
            case 0: // Java
                return (
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fjava-png-png-300x225-java-logo-no-background-300.png&f=1&nofb=1) center / cover'}}>Project 1</CardTitle>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fjava-png-png-300x225-java-logo-no-background-300.png&f=1&nofb=1) center / cover'}}>Project 1</CardTitle>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 3 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fjava-png-png-300x225-java-logo-no-background-300.png&f=1&nofb=1) center / cover'}}>Project 1</CardTitle>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
                break;
            case 1: // Python
                return (
                    <div><h1>This is Python</h1></div>
                )
            case 2: // JavaScript
                return (
                    <div><h1>This is JavaScript</h1></div>
                )
                break;
            case 3: // HTML
                return (
                    <div><h1>This is HTML</h1></div>
                )
                break;
            case 4: // CSS
                return (
                    <div><h1>This is CSS</h1></div>
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
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
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