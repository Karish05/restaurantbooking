import React, { useState } from "react";
// import { useState } from 'react';
import './App.css';
import {  Grid  } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import logo from './assets/logo.jpeg';
import {Link  } from "react-router-dom";

import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


const Loginpage2=()=>{
  const[name,setName]=useState("")
  const handlesubmit=(e)=>{
        e.preventDefault()
        if(name === 0){
          alert("Usename must be Entered")
          return
        }
  }
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
      <main style={{}}>
        <h1 style={{textAlign:"center",padding:"20px",position:"inherit"}}>Lee Booking</h1>
    
        <Card  variant="outlined" sx={{ width:500}} className='cards'  
        style={{margin:'100px auto 0px auto',padding:'20px'}}>
        <Grid className='image1' style={{textAlign:"center",
                                         padding:'20px'}}>   
        <img src={logo} alt='logo' width={70}height={70}   />
        </Grid>
        <form onSubmit={handlesubmit}>
        <Grid className='Text-field' >
        <TextField fullWidth  sx={{ mb: 3 }} name='username' 
         label="UserName" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Grid>
        <Grid className='Text-field'>
        {/* <TextField fullWidth className="standard-basic"  sx={{ mb: 3}} name='password'  required 
        label="Password" variant="standard" /> */}
         <FormControl variant="standard" sx={{ mb: 3 }} style={{width:"100%"}}>
          <InputLabel >Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>
        <Grid style={{textAlign:"center"}}>
        <Button variant="contained" ><Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>LOGIN</Link></Button>
        </Grid>
        </form>
        </Card>
      
      </main>
    )
}

export default Loginpage2;