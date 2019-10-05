import React, { Component } from 'react'

import MUIDataTable from "mui-datatables";

import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
    filterType: 'checkbox',
  };

const styles = theme => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    }
})

class ClientPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        const { classes } = this.props
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="h3" gutterBottom>
                            Clients Overview
                        </Typography>

                        <Divider />

                        <MUIDataTable 
                            title={"Employee List"} 
                            data={data} 
                            columns={columns} 
                            options={options} 
                        />

                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ClientPage)