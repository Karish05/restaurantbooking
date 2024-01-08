import { AccountCircle } from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";
import contactus from "./contactus.jpg"



function Contactus(){
    return(
         <Grid className="contactpage" >
        <p>.</p>
        <Grid container spacing={0} style={{width:"700px",height:"500px",margin:"100px auto" 
       ,backgroundColor:"#fff"}}>
        <p style={{backgroundColor:"#2EA3DE" ,width:"100%",height:"30px"}}>.</p>
        <Grid item xs={6} style={{textAlign:"center"}}>
        <h1 style={{margin:"20px",textAlign:"start"}}>Contact us</h1>
          <item>
          <TextField fullWidth style={{margin:"10px",width:"300px"}}
        id="input-with-icon-textfield"
        placeholder="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      /><br/>
             <TextField
          
        id="input-with-icon-textfield"
        placeholder="Email" style={{margin:"10px",width:"300px"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      /><br/>
      <input type="message"  placeholder="Message" 
      style={{padding:"30px",borderRadius:"20px",width:"250px",margin:"20px"}}></input>
      <Grid style={{margin:"20px"}} >
      <Button variant="contained" style={{borderRadius:"10px",width:"300px",padding:"10px"}} >Send Message</Button>
      </Grid>
          </item>
        </Grid>
        <Grid item xs={6}><item>
        <img src={contactus} alt="contactImage" width="300px" height="400px"></img>
        </item>
        </Grid>
       </Grid>
       <footer>.</footer>
       </Grid>
       
    )
}

export default Contactus;