import React, { useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import moment from 'moment';


function HeadNav(){
     
    const[dateandtime,setDateandTime]=useState("");

         
        let name="karish"
       useEffect(() => {
        var date = new Date();
        console.log(date, "Date")
        var todayDateandTime = moment(date).format('DD:MM:YYYY hh:mm');
        console.log(todayDateandTime,"Today")
        setDateandTime(todayDateandTime);
       },[])

    return(
        <header className='Headnav' >
            <Grid className="Headdetails" >
            <p >Name    :  {name}</p><br/>
            <p >LoginTime: {dateandtime}</p>
            </Grid>
            <Link to="/login"><Grid className="Logout" >
            <span style={{fontWeight:"bold"}}>LogOut</span> 
            <Grid> <LogoutIcon/> </Grid>
            </Grid></Link>
            
            
        </header>
    )
}

export default HeadNav;