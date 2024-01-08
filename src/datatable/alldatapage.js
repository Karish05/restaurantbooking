import { Grid } from "@mui/material";
import React from "react";
import DataTable from "./datatable";
import SideNav from "../sidenav/sideNav";
import HeadNav from "../header/headNav";

function AlldataPage(){
    return(
        <Grid container>
           <Grid xs={2}>
              <SideNav/>  
           </Grid>
           <Grid xs={10}>
            <HeadNav/>
            <DataTable/>
           </Grid>
        </Grid>
    )
}

export default AlldataPage;