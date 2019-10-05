import React, { Component } from 'react'

import { withStyles } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import FileIcon from '@material-ui/icons/FileCopy'

const styles = theme => ({
    inline: {
        display: 'inline',
    }
})

class AgendaItem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        const { classes } = this.props
        const {name, client_id, ddName, dateDue, status} = this.props.item

        return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>
                        <FileIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${name} - ${ddName} - ${status}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {`${dateDue}`}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
        )
    }
}

export default withStyles(styles)(AgendaItem)