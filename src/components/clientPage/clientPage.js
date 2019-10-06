import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import ClientTable from './clientTable'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

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
                        <Paper elevation={2} >
                            <Typography variant="h3" gutterBottom>
                                Clients Overview
                            </Typography>
                        </Paper>

                        <Divider />

                        <Paper elevation={2}>
                            <ClientTable />
                        </Paper>

                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ClientPage)