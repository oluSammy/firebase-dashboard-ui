import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import sidebarStyles from './sidebar.styles';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import StorageIcon from '@material-ui/icons/Storage';
import PanoramaIcon from '@material-ui/icons/Panorama';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SettingsIcon from '@material-ui/icons/Settings';
import TimerIcon from '@material-ui/icons/Timer';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';


const listOne = [
    {text: 'Authentication', icon: <PeopleIcon style={{fontSize: '1rem'}} />},
    {text: 'Database', icon: <StorageIcon style={{fontSize: '1rem'}} />},
    {text: 'Storage', icon: <PanoramaIcon style={{fontSize: '1rem'}} />},
    {text: 'Hosting', icon: <PublicIcon style={{fontSize: '1rem'}} />},
    {text: 'Functions', icon: <SettingsEthernetIcon style={{fontSize: '1rem'}} />},
    {text: 'Mil Kit', icon: <DeveloperBoardIcon style={{fontSize: '1rem'}} />}
];

const listTwo = [
    {text: 'Analytics', icon: <SettingsIcon style={{fontSize: '1rem'}} />},
    {text: 'Performance', icon: <TimerIcon style={{fontSize: '1rem'}} />},
    {text: 'Test Lab', icon: <PhonelinkSetupIcon style={{fontSize: '1rem'}} />},
]


const Sidebar = () => {
    const classes = sidebarStyles();
    return (
        <div className={classes.root} >
            <div className={classes.header} >
                <Typography variant="h6" className={classes.paperbase} >Paperbase </Typography>
                <div style={{borderBottom: '1px solid  #424242'}} />
                <div className={classes.overview} >
                    <HomeIcon className={classes.homeIcon} />
                    <Typography className={classes.projectOverview} variant="subtitle2"> Project Overview </Typography>
                </div>
            </div>
            <div style={{borderBottom: '1px solid  #424242'}} />
            <Typography variant="h6" className={classes.develop} >Develop</Typography>
            <List component="nav" aria-label="main mailbox folders" >
                {listOne.map(item => (
                    <ListItem className={classes.listItem} button key={item.text} >
                        <ListItemIcon className={classes.listIcon} >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText className={classes.listText} style={{marginLeft: '-1.5rem'}}>
                            <Typography style={{fontSize: '.9rem', fontWeight: '700'}}>{item.text}</Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <div style={{borderBottom: '1px solid  #424242'}} />
            <Typography variant="h6" className={classes.develop} >Quality</Typography>
            <List component="nav" aria-label="main mailbox folders" >
                {listTwo.map(item => (
                    <ListItem className={classes.listItem} button key={item.text} >
                        <ListItemIcon className={classes.listIcon} >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText className={classes.listText} style={{marginLeft: '-1.5rem'}}>
                            <Typography style={{fontSize: '.9rem', fontWeight: '700'}}>{item.text}</Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <div style={{borderBottom: '1px solid  #424242', marginTop: '1rem'}} />
        </div>
    )
}

export default Sidebar;
