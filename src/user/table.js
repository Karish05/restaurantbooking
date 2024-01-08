import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Card}  from "@mui/material";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import '../../App.css';



function Tablepage(){
   const disPatch=useDispatch("")
   disPatch({type:"userdetails"})
       const userData=useSelector(state=>state.userData)

    return(
      < main style={{margin:"50px auto"}}>
      <h2 style={{paddingBottom:"20px",margin:"10px"}}>User Details</h2>
<Card style={{boxShadow:"10px 10px 8px 10px #888888",margin:"20px"}}>
      <Grid >
      <TableContainer component={Paper} style={{border:"1px solid black",width:"auto"}}>
        <Table  aria-label="simple table">
          <TableHead className="Table">
          <TableRow className="tablerow">
          <TableCell >Name</TableCell>
            <TableCell >Email Id</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Mobile Number</TableCell>
            <TableCell >Restaurent Name</TableCell>
            <TableCell >Restaurent Address</TableCell>
            <TableCell >Role</TableCell>
            <TableCell >Landline Number</TableCell>
            <TableCell >Login Time</TableCell>
            <TableCell >Date</TableCell>
          </TableRow>
          </TableHead>
          <TableBody> 
          {userData.map((details) => (
            <TableRow
              key={details.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {details.Name}
              </TableCell>
              <TableCell >{details.emailid}</TableCell>
              <TableCell >{details.password}</TableCell>
              <TableCell >{details.Mobilenumber}</TableCell>
              <TableCell >{details.Restarentname}</TableCell>
              <TableCell >{details.RestaurentAddress}</TableCell>
              <TableCell >{details.Role}</TableCell>
              <TableCell >{details.LandlineNumber}</TableCell>
              <TableCell >{details.Logintime}</TableCell>
              <TableCell >{details.Date}</TableCell>


              
            </TableRow>
          ))} 
        </TableBody>
          </Table>
      </TableContainer>
      </Grid>
      </Card>
      </main>
    )
}

export default Tablepage;