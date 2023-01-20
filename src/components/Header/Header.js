import {Badge,Divider,IconButton, Toolbar,Typography} from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import NotificationsIcon from '@mui/icons-material/Notifications';
 import SideDrawer from "../SideDrawer/SideDrawer";
  
  function Header() {
    return (
      <>
        <Toolbar>
           <SideDrawer>  
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            </SideDrawer>  
          <Typography variant="h6" style={{flexGrow:1}}>
            Blogging Website
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon fontSize='large' />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
  
        <Divider />
  
        <Toolbar  style={{fontSize:30,
          textTransform:"uppercase",
          justifyContent:"center",
          fontFamily:"Montserrat"}}>
          Express your emotions through words
        </Toolbar>
      </>
    );
  }
  
  export default Header;