import React from 'react';
import { CssBaseline, Grid, Hidden, useMediaQuery } from '@material-ui/core';
import { Drawer, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Sidebar from './components/Sidebar/Sidebar.components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Home from './components/Home/Home.component';

const drawerWidth = '20%';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      width: '60%'
  }
  },
}))

const App = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState();

  const handleDrawer = () => {
    setOpen(true);
  }

  return (
    <div>
      <CssBaseline />
      <SwipeableDrawer
        variant="temporary"
        open={open}
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Sidebar />
      </SwipeableDrawer>
      <nav>
        <Hidden smDown>
          <Grid item md={3} >
            <Drawer
              variant="permanent"
              open
              classes={{ paper: classes.drawerPaper }}
            >
              <Sidebar  />
            </Drawer>
          </Grid>
        </Hidden>
      </nav>
      <main style={{marginLeft: matches ? drawerWidth : 0 , backgroundColor: '#eeeeee', minHeight: '100vh'}}>
        <Home handleDrawer={handleDrawer} />
      </main>
    </div>
  )
}

export default App
