import React, { Component, Fragment } from 'react'

import AgendaItem from './agendaItem'

import { withStyles } from '@material-ui/core'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { throwStatement } from '@babel/types';

const data1 = require('../../data1.json');

const columns = []

const options = {
    filterType: 'checkbox',
  }

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class Agenda extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ddList: []
        }
    }

    loadDueDates = () => {
        let tempRow = []
        let toReturn = []

        for (var i = 0; i < data1.duedates.length; i++) {
            tempRow = []

            tempRow.push(data1.duedates.id)
            tempRow.push(data1.duedates.clientId)
            tempRow.push(data1.duedates.name)
            tempRow.push(data1.duedates.due)
            tempRow.push(data1.duedates.complete)

            toReturn.push(tempRow)
        }
        this.setState({ddList: toReturn})
    }

    componentDidMount() {
        this.loadDueDates()
    }

    render () {
        const { classes } = this.props
        const { ddList } = this.state

        return (
            <Fragment>
                <List>
                    <AgendaItem item={{name: "Bob Smith", ddName: "1040", dateDue: "10-5-2019", status: "complete"}} />
                </List>


            </Fragment>
        )
    }
}

export default withStyles(styles)(Agenda)