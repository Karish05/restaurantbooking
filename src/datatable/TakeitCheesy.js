import { Grid } from "@mui/material";
import React from "react";
import image from "./takeitCheesy.jpg";
import imgae1 from "./teke it cheesy 2.jpg"

function TakeitCheesy(){
    return(
        <Grid>
            <h3>Take it Cheesy</h3>
            <h4>Your dream resort !</h4>
            <address>6/3B, Devaneri, East Coast Road, Mahabalipuram Tamil Nadu, 603103 Chennai, India –</address>
            <Grid style={{margin:"10px"}}><img src={image} style={{width:"500px",height:"400px"}}></img>
                 <img src={imgae1} style={{width:"300px",height:"200px"}}></img>
            
                </Grid>       
    
        </Grid>
    )
}

export default TakeitCheesy;