import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Menu, MenuItem, Skeleton, Snackbar, Tooltip } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

import "../resources/css/shared.css"
// Constants imports
import { DEFAULT_SIDE_MENU, drawerWidth, IconTitleMap, userProfileDefaultData } from '../Utils/Constants';

// Routing imports
import { Link, Route, Routes } from 'react-router-dom';

// importing resources
import userImage from "../resources/images/userImage.png"
import "../resources/css/dashboard.css"
import "../resources/css/shared.css"

// importing components
import BreadCrumbComponent from './BreadCrumbComponent';
import Academics from "./Academics"
import Projects from './Projects';
import Profile from './Profile';
import Home from './Home';
import PageNotFound from './PageNotFound';

// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSideMenu, setActivePage } from '../redux/slices/navSlice';
import { setDrawerOpen, setSnackbarOpen } from '../redux/slices/systemSlice';



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor:"Transparent",
  overflowX: 'hidden',
  border: 'none',
  margin: '1%',
  borderRadius: '21px 21px 21px 21px',
  height: `calc(100vh - 5%)`,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: 'none',
  margin: '1%',
  borderRadius: '21px 21px 21px 21px',
  backgroundColor:"Transparent",
  height: `calc(100vh - 5%)`,
  '&:hover':{
    transition: '0.3s all ease-in-out',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '1%',
  paddingLeft: '1%',
  boxShadow: 'none',
  background: 'Transparent',
  // border: '2px solid red',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px - 1%)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Dashboard() {
  const theme = useTheme();
  const userName= userProfileDefaultData.Name;
  const [dataStatus, setDataStatus]= React.useState(true);
  // const [activeSideMenu, setactiveSideMenu]= React.useState(0)
  
  // Redux related code
  const dispatch= useDispatch()
  const ActivePage= useSelector((state) => state.navigation.ActivePage)
  const activeSideMenu= useSelector((state) => state.navigation.activeSideMenu)
  const drawerOpen= useSelector((state) => state.system.drawerOpen)
  const openSnackbar= useSelector((state)=>state.system.snackbarOpen)
  const snackbarMessage= useSelector((state)=>state.system.snackbarMessage)

  // Avatar Menu related 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAvatarMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAvtarMenu = () => {
    setAnchorEl(null);
  };
  const AvtarMenuClickHandler= (index) => {
    setAnchorEl(null);
    if(index === 0){
      return
    }
    let message= ""
    if(index === 1)
      message= "Resume Download Started"
    else if(index === 2)
      message= "Dark Mode is On"
    dispatch(setSnackbarOpen({snackbarOpen: true, snackbarMessage: message}))
  }


  // Snackbar action handlers
  const handleCloseSnackbar= (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnackbarOpen({snackbarOpen: false, snackbarMessage: null}))
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="#f05811"
        onClick={handleCloseSnackbar}
      >
        <CloseRounded fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // Drawer Action handlers
  const handleDrawerOpen = () => {
    dispatch(setDrawerOpen({drawerOpen: true}))
  };
  const handleDrawerClose = () => {
    dispatch(setDrawerOpen({drawerOpen: false}))
  };

  const activeBtnChange= (index)=>{
    setDataStatus(true);
    dispatch(setActivePage({activePage: DEFAULT_SIDE_MENU[index].title}))
    dispatch(setActiveSideMenu({activeSideMenu: index}))
  }

  return (
    <Box className="HomeContainer">
      <CssBaseline />
      <AppBar className="AppBar" position="fixed" open={drawerOpen}>
        <Toolbar>
          <IconButton
            color="#f05811"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              //color: 'gray',
              color:'white',
              ...(drawerOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="AppBarText">
            <div className="AppBarTextIcon">
              {IconTitleMap[ActivePage]} 
            </div>
            <div>
              {ActivePage}
            </div>
          </Box>
        </Toolbar>
          <Box className="Profile" sx={{mr: 2}}>
              <Avatar alt="Tushar" src={userImage} sx={{cursor: 'pointer', border: '3px solid white'}} onClick={handleClick}/>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openAvatarMenu}
                onClose={handleCloseAvtarMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {/* Todo: Extract out in a list in constants file also add resume */}
                <MenuItem onClick={() => AvtarMenuClickHandler(0)}>Profile</MenuItem>
                <MenuItem onClick={() => AvtarMenuClickHandler(1)}>Download Resume</MenuItem>
                <MenuItem onClick={() => AvtarMenuClickHandler(2)}>Dark Mode</MenuItem>
               
               </Menu>
          </Box>
      </AppBar>
      
      <Drawer variant="permanent" open={drawerOpen}>
        <DrawerHeader className={`${drawerOpen ? "show sideFloatClass": "hide"}`} >
        {/* <Avatar 
        alt={userName} 
        // src={userImage} 
        sx={{ cursor: 'pointer', margin: 'auto' ,  border: '3px solid white' }} 
        /> */}

          <h3 style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#f2f2f4',
            fontFamily: 'Comic Sans MS',}}
            className="firstLetterStyle" >{userName}</h3>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
  {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: 'white' }} /> : <ChevronLeftIcon sx={{ color: 'white' }} />}
</IconButton>

        </DrawerHeader>
        <Divider />
        <List className="sideMenuContainer" sx={{background: 'transparent'}}>
        {
          DEFAULT_SIDE_MENU.map((data, index) => (
            <div key={index} className={drawerOpen ? "sideFloatClass" : ""} style={{ animationDelay: `${index * 0.15}s`}}>
              <Link className="sideMenuLinks" to={data.link} >
                <ListItem
                  disablePadding 
                  className={index === activeSideMenu ? drawerOpen ? "activeOpenBtn" : "activeCloseBtn": "sideMenuItem"} 
                  sx={{ display: 'block' }} 
                  onClick={()=>activeBtnChange(index)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 45,
                      justifyContent: drawerOpen ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <Tooltip title={data.title} placement='right' >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: drawerOpen ? 3 : 'auto',
                          justifyContent: 'center',
                          color: index === activeSideMenu ?  '#f05811': 'white' ,
                        }}
                      >
                        {data.icon}
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={data.title} sx={{ opacity: drawerOpen ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>  
              </Link>
            </div>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
      
      <Box component="main" sx={{flexGrow: 1 }}>
        <DrawerHeader />
        {
          dataStatus ?
          <div className="MainComponent">
            <BreadCrumbComponent data={["Portfolio",ActivePage]}/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contact" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          :
          <div className="SkeletonComponent" style={{padding: '1%'}}>
            <Skeleton className="skeleton" sx={{mb: 1, width: '98%'}} variant="rectangular" height={80} />
            <Skeleton className="skeleton" sx={{mb: 1, width: '90%'}} variant="rectangular" height={100} />
            <Skeleton className="skeleton" sx={{mb: 1, width: '90%'}} variant="rectangular" height={70} />
            <Skeleton className="skeleton" sx={{mb: 1, width: '100%'}} variant="rectangular" height={40} />
            <Skeleton className="skeleton" sx={{mb: 1, width: '100%'}} variant="rectangular" height={210} />
          </div>
        }
        
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
      />
    </Box>
  );
}
