import React, { Component, Fragment } from 'react'

import AgendaItem from './agendaItem'

import { withStyles } from '@material-ui/core'

import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

const data1 = require('../../data1.json')

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
        }
    }

    renderAgendaItems = () => {
        var temparr = data1.duedates.slice(0, data1.duedates.length)

        return temparr.map((item, index) => {

            var tempItem = {
                name: data1.clients[index].first_name,
                dName: item.name,
                dateDue: item.due,
                status: item.complete
            }

            return (
                <Fragment key={index}>
                    <AgendaItem item={tempItem} />
                    <Divider />
                </Fragment>
            )
        })
    }


    render () {
        // const { classes } = this.props

        return (
            <Fragment>
                <List>
                    {/* <AgendaItem item={{name: "Bob Smith", ddName: "1040", dateDue: "10-5-2019", status: "complete"}} /> */}
                    {this.renderAgendaItems()}
                </List>


            </Fragment>
        )
    }
}

export default withStyles(styles)(Agenda)