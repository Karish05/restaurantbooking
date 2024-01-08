// import { TableRows } from "@mui/icons-material";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";




function DataTable(){
        const dispatch=useDispatch("");
        dispatch({type:"restaurentdetails"})
        const restaurentdetails=useSelector(state=>state.restaurentTable)

    return(
      
      <Card style={{margin:"100px 20px 0px 20px"}}>
        <h1 style={{paddingBottom:"30px"}}>Restaurent details</h1>
        <TableContainer style={{boxShadow:"10px 10px 8px 10px #888888"}}>
          
            <Table>
                <TableHead style={{backgroundColor:"#0B0AA5",color:"white"}}>
                    <TableCell style={{color:"white",fontWeight:"bold"}}>S.no</TableCell>
                    <TableCell style={{color:"white",fontWeight:"bold"}}>Restaurent Name</TableCell>
                    <TableCell style={{color:"white",fontWeight:"bold"}}>Location</TableCell>
                    <TableCell style={{color:"white",fontWeight:"bold"}}>Offer</TableCell>
                    <TableCell style={{color:"white",fontWeight:"bold"}}>Contact details</TableCell>
                   <TableCell style={{color:"white",fontWeight:"bold"}}>Information</TableCell>


                </TableHead>
            <TableBody>
              {restaurentdetails.map((values) =>(
                  <TableRow key={values.Sno}>
                  <TableCell>{values.Sno}</TableCell>
                  <TableCell>{values.Restaurentname}</TableCell>
                  <TableCell>{values.Location}</TableCell>
                  <TableCell>{values.offer}</TableCell>
                  <TableCell>{values.Contact}</TableCell>
                  <TableCell style={{cursor:"pointer"}}><Link>{values.info}</Link></TableCell>
      

                  </TableRow> 
                  ))
                   }
            </TableBody>
            </Table>
        </TableContainer>
      </Card>  
    )
}

export default DataTable