import { Grid } from "@mui/material";
import React from "react";
import SideNav from "./sideNav";
import HeadNav from "../header/headNav";
import Chart from "../header/chart";

function Home(){
    return(
          <Grid container>
            <Grid  xs={2}>
               <SideNav/>
            </Grid>
            <Grid xs={10}>
                <HeadNav/>
                <Chart/>
            </Grid>

          </Grid>
    )
}

export default Home;