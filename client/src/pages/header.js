import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'center',
    },
    // dropdown: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   marginLeft: theme.spacing(2),
    // },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ transform: 'translate(0%, -10%)' }}>
        <Toolbar>
          <Typography
            variant="dense" style={{ fontFamily: 'fontFamily', fontSize: '50px' }} className={classes.title}>
              Stock Hunter
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ position: 'absolute', top: '32px', right: '0', transform: 'translate(-30%, -40%)', background: 'transparent', boxShadow: 'none' }}
      >
       <Icon style={{ fontSize: 45 }}>add_circle</Icon>       
      </Button>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Header;