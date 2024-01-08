import { Grid } from '@mui/material';
// import { Box } from '@mui/material';
import React  from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link, NavLink } from 'react-router-dom';
import DetailsIcon from '@mui/icons-material/Details';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import "../App.css"



function SideNav(){
    return(
      <Grid style={{width:"100%",height:"60vw"}} className='sidebar1'>
        
      <ul className='listdetails'>
      
        <li className='lists'>
         <Grid className='icons'></Grid>
        <Grid className='title'><NavLink to="/home" style={{textDecoration:"none",color:"white"}}>
       <AddHomeIcon/> Home</NavLink></Grid></li>
        <li className='lists'>
          <Grid className='icons'></Grid>
        <Grid className='title'>
          <NavLink to="/contactus" style={{textDecoration:"none",color:"White"}}><ContactsIcon/>Contact Us</NavLink></Grid></li>
          <li className='lists'>
          <Grid className='icons'></Grid>
        <Grid className='title'>
          <NavLink to="/alldatapage" style={{textDecoration:"none",color:"White"}}><DetailsIcon/>Restaurent details</NavLink></Grid></li>
          <li className='lists'>
          <Grid className='icons'> </Grid>
        <Grid className='title'>
          <NavLink to="/userdetails" style={{textDecoration:"none",color:"White"}}><VerifiedUserIcon/>User Details</NavLink></Grid></li>
        
      </ul>
      </Grid>
    )
}

export default SideNav;