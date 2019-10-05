import React, { Component } from 'react'

import '../../App.css'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";

import moment from 'moment'

import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [
                {
                  start: new Date(),
                  end: new Date(moment().add(1, "days")),
                  title: "Some title"
                }
              ]
        }
    }

    render () {
        const { classes } = this.props
        return (
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Calendar Overview
                        </Typography>

                        <Divider />

                        <FullCalendar 
                            defaultView="dayGridMonth" 
                            plugins={[ dayGridPlugin ]} 
                            header={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                            }}
                            />

                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Agenda
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(HomePage)