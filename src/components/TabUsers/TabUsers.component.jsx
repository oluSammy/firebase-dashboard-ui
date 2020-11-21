import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';
import tabUsersStyles from './TabUsers.styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';



const TabUsers = () => {
    const classes = tabUsersStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} classes={{rounded: classes.paperRounded}}>
                <div className={classes.searchBar}>
                    <SearchIcon />
                    <input type="search" name="search" id="search" className={classes.search}
                    placeholder="Search by email address, phone number or user UID" />
                    <Button variant="contained" color="primary"> Add User </Button>
                    <IconButton aria-label="reload">
                        <ReplayIcon />
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.users}>
                    <Typography variant="subtitle2">No users for this project yet</Typography>
                </div>
            </Paper>
        </div>
    )
}

export default TabUsers
