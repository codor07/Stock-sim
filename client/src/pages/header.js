import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = (props) => {
  console.log(props.userInfo)
  const navigate=useNavigate();
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        // console.log(event.currentTarget);
      };
      const handleLogOut=()=>{
        alert("Are you sure! you want to logout?")
        navigate("/login");
      }
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleProfile = () => {
        setAnchorEl(null);
        navigate('/profile',{state:{val:props.userInfo.state.val!=null?props.userInfo.state.val:""}});
      };
      const handleHome = () => {
        setAnchorEl(null);
        navigate('/home',{state:{val:props.userInfo.state.val!=null?props.userInfo.state.val:""}});
      };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title} style={{ textAlign:'center', fontSize: '30px' }}>
              Stock Predictor and Paper Trading
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize: '50px'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleHome}>Home</MenuItem>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header