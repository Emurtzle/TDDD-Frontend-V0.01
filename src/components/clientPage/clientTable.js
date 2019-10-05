import React, { Component, Fragment } from 'react'

import MUIDataTable from "mui-datatables"

import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const data1 = require('../../data1.json');

const columns = ["ID", "First", "Last", "Email", "Gender", "Phone Number", "Address", "Job", "Salary"]

const options = {
    filterType: 'checkbox',
  }

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class ClientTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clientList: []
        }
    }

    dataMassage = () => {
        let tempRow = []
        let toReturn = []

        for(var i = 0; i < data1.clients.length; i++) {
            var obj = data1.clients[i];

            tempRow = []
            tempRow.push(data1.clients[i].id.toString())
            tempRow.push(data1.clients[i].first_name)
            tempRow.push(data1.clients[i].last_name)
            tempRow.push(data1.clients[i].email)
            tempRow.push(data1.clients[i].gender)
            tempRow.push(data1.clients[i].phone_number)
            tempRow.push(data1.clients[i].address)
            tempRow.push(data1.clients[i].ssn)
            tempRow.push(data1.clients[i].occupation)
            tempRow.push(data1.clients[i].salary.toString())
        
            toReturn.push(tempRow)
        }
        this.setState({clientList: toReturn})
    }

    componentDidMount() {
        this.dataMassage()
    }

    render () {
        const { classes } = this.props
        const { clientList } = this.state

        return (
            <Fragment>
                <MUIDataTable 
                    title={"Employee List"} 
                    data={clientList} 
                    columns={columns} 
                    options={options} 
                />
            </Fragment>
        )
    }
}

export default withStyles(styles)(ClientTable)