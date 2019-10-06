import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import '../../App.css'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
import moment from 'moment'

// import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
// import Paper from '@material-ui/core/Paper'

const data1 = require('../../data1.json')

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            calendarEvents: [
                // initial event data
                { title: "Event Now", start: new Date() }
            ]
        }
    }

    loadCalendarEvents = () => {
        let tempRow = []
        let toReturn = []
        let tempClient = {}

        for (var i = 0; i < data1.duedates.length; i++) {
            tempRow = []
            tempClient = data1.clients[data1.duedates[i].clientId]

            tempRow = {
                title: data1.duedates[i].name + " - " + tempClient.first_name + " " + tempClient.last_name,
                start: data1.duedates[i].due
            }

            toReturn.push(tempRow)
        }
        this.setState({calendarEvents: toReturn})
    }

    componentDidMount() {
        this.loadCalendarEvents()
    }

    render () {

        return (
            <Fragment>
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    events={this.state.calendarEvents}
                />
            </Fragment>
        )
    }
}

export default withStyles(styles)(Calendar)