import React, { Component } from 'react'

import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({

})

class DueDatesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {

        return (
            <Grid container spacing={1}>
                <Paper>
                    <Typography>
                        Due Dates Page!
                    </Typography>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(DueDatesPage)