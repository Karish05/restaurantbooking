import { Grid } from "@mui/material";
import React from "react";
import SideNav from "../sidenav/sideNav";
import HeadNav from "../header/headNav";
import Tablepage from "./table";

function UserDetails(){
    return(
      <>
      <Grid container>
        <Grid xs={2}>
          <SideNav/>
        </Grid>
        <Grid xs={10}>
            <HeadNav/>
            <Tablepage/>
        </Grid>
      </Grid>
      </>       
    )
}

export default UserDetails;