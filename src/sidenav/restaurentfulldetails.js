import { Grid } from "@mui/material";
import React from "react";
import SideNav from "./sideNav";
import HeadNav from "../header/headNav";
import TakeitCheesy from "../datatable/TakeitCheesy";

function RestaurentFullDetails(){
    return(
        <Grid container>
            <Grid >
                <TakeitCheesy/>
            </Grid>
        </Grid>
    )
}

export default RestaurentFullDetails;