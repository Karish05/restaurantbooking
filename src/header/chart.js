import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Circle } from "rc-progress";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../App.css"
import delhi from "./delhi.jpg"


function Chart(){

  const disPatch=useDispatch("");
  disPatch({type:"population"})
  const stateName=useSelector(state=>state.stateName)
  // console.log(stateName)

  return(
    <>
   <div className="chartcontainer">
    {stateName.map(list => 
      <Grid className="Chart">
      <Card className="card">
        <CardContent className="content">
          <h3>{list.Name}</h3>
        <Typography >Total :{list.Total}</Typography>
        <span > Percentage: {list.Number} %</span>
        </CardContent>
        <Typography className="circle" >
        <Circle percent={list.Number} trailWidth={10}  strokeWidth={10} 
       strokeColor="Green"/>
       </Typography>
        </Card>
        </Grid>
      )}     
            </div>
            <div className = "head-text">
        <div className = "head-image">
          <img src = {require ('./delhi.jpg')} alt = "Freedom Blog" style={{width:"500px",height:"300px",borderRadius:"10px"}}/>
        </div>
          <div class='text-on-image'>
             <h3 > New Delhi</h3>
          </div>
          <div style={{marginLeft:"30px"}}>
          <img src = {require ('./bangalore.jpg')} alt = "Freedom Blog" style={{width:"500px",height:"300px",borderRadius:"10px"}}/>
        </div>
          <div class='text-on-image1'>
             <h3 > Bangalore</h3>
          </div>
      </div>
          </>
  )
}

export default Chart;