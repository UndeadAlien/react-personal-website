import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

/* startYear - endYear */
/* jobName - jobDescription */

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobLocation}</h4>
                    <p style={{marginTop: '0px', fontStyle: 'italic'}}>{this.props.jobName}</p>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;