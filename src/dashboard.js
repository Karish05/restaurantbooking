
import React from 'react';
import SideNav from './sidenav/sideNav';
import HeadNav from './header/headNav';
import Grid  from '@mui/material/Grid';
import Chart from './header/chart';

const Dashboard=()=>{
   
    
    return(
      
      <Grid container>
     <Grid item xs={2}>
      <SideNav/>
     </Grid>
     <Grid item xs={10}>
      <HeadNav/>
       <Chart/>
     </Grid>
     </Grid>
     

    )
}

export default Dashboard;