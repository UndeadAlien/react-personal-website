import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

/* startYear - endYear */
/* schoolName - schoolDescription */

class Programming extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px'}}></CardTitle>
                        <CardText>
                            <h5>{this.props.projectName}</h5>
                            <p>{this.props.projectDescription}</p>
                        </CardText>
                        <CardActions border>
                            <Button colored href={this.props.githubLink}>Github</Button>
                            <Button colored href={this.props.codePenLink}>CodePen</Button>
                            <Button colored href={this.props.livedemoLink}>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
            </Grid>
        )
    }
}

export default Programming;