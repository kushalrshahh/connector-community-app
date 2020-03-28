import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import CompanyLogo from '/Users/kushalshah/Documents/connector-community-app/CC-Wordmark_color.png';
// import CompanyName from '/Users/kushalshah/Documents/connector-community-app/covid connector.png'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#F2F2F2"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color='transparent'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           {/* <img src={CompanyLogo} alt="Logo"/>
           <img src={CompanyName} alt="Community Connector"/> */}
          </Typography>
          <Button color="black">About</Button>
          <Button color="black">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}