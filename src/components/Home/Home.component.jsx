import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import homeStyles from './Home.styles';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../assets/img/avatar.jpg';
import HelpIcon from '@material-ui/icons/Help';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabUsers from '../TabUsers/TabUsers.component';
import Tooltip from '@material-ui/core/Tooltip';




const Home = ({ handleDrawer }) => {
    const classes = homeStyles();
    const [value, setValue] = React.useState(0);

    const handleTabs = (e, value) => {
        setValue(value)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={handleDrawer}>
                        <MenuIcon className={classes.toolbarIcon}  />
                    </IconButton>
                    <ul className={classes.topToolbar}>
                        <Typography className={classes.toolbarDoc} variant="body2" >Go to docs</Typography>
                        <Tooltip title="Alerts*. No alerts">
                            <IconButton>
                                <NotificationsIcon className={classes.toolbarIcon} />
                            </IconButton>
                        </Tooltip>
                        <Avatar alt="Remy Sharp" src={avatar} />
                    </ul>
                </Toolbar>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.auth} variant="h5" >Authentication</Typography>
                    <ul className={classes.topToolbar}>
                        <Button variant="outlined"
                        style={{color: '#fff', border: '1px solid #fff', borderRadius: '.4rem', fontSize: '.7rem', fontWeight: '700',
                        padding: '.3rem .7rem'}}>
                            Web setup
                        </Button>
                        <IconButton>
                            <HelpIcon className={classes.toolbarIcon} />
                        </IconButton>
                    </ul>
                </Toolbar>
                <Toolbar className={classes.toolbar} >
                    <Tabs value={value} onChange={handleTabs} className={classes.tabContainer}
                    classes={{indicator: classes.indicator}}
                    >
                        <Tab className={classes.tab} label="Users" disableRipple style={{}} />
                        <Tab  className={classes.tab} label="Sign-in method" disableRipple />
                        <Tab  className={classes.tab} label="Templates" disableRipple />
                        <Tab  className={classes.tab} label="Usage" disableRipple />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0} > <TabUsers /> </TabPanel>
            <TabPanel value={value} index={1} >Hello Item 2</TabPanel>
            <TabPanel value={value} index={2} >Hello Item 3</TabPanel>
            <TabPanel value={value} index={3} >Hello Item 4</TabPanel>
        </div>
    )
}

const TabPanel = ({children, value, index}) => {
    return(
    <div>
        {value === index && <h1>{children}</h1>}
    </div>)
}

export default Home
