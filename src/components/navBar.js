import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountIcon from '@material-ui/icons/AccountCircle'

const clientsLink = props => <Link to="/clients" {...props} />
const homeLink = props => <Link to="/home" {...props} />
const dueDatesLink = props => <Link to="/duedates" {...props} />

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
})

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }
    }

    openMenu = (ev) => {
        this.setState({ anchorEl: ev.currentTarget })
    }

    closeMenu = () => {
        this.setState({ anchorEl: null })
    }

    render () {
        const { anchorEl } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Tax Due Date Database
                        </Typography>

                        <Fragment>
                            <Button size="large" color="inherit" component={homeLink}>Home</Button>
                            <Button size="large" color="inherit" component={clientsLink}>Clients</Button>
                            <Button size="large" color="inherit" component={dueDatesLink}>Due Dates</Button>

                            <IconButton
                                className={classes.menuButton}
                                color='inherit'
                                aria-label='Menu'
                                onClick={this.openMenu}
                            >
                                <AccountIcon fontSize='large'/>
                            </IconButton>

                            <Menu
                                id="account-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.closeMenu}
                            >
                                <MenuItem>My Account</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </Menu>

                        </Fragment>

                    </Toolbar>
                </AppBar>
            </div>




        )
    }
}

export default withStyles(styles)(Navbar)