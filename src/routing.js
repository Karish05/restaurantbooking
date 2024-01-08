import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Contactus from "./sidenav/contactus";
import AlldataPage from "./datatable/alldatapage";
import UserDetails from "./user/usedetails";
import Home from "./sidenav/home";
import Loginpage2 from "./login";
// import TakeitCheesy from "./datatable/TakeitCheesy";
import RestaurentFullDetails from "./sidenav/restaurentfulldetails";


const Sidebar=()=>{
    return(
      
       <Routes>
       <Route exact path='/' element={< Login />}></Route>
       <Route exact path='/dashboard' element={< Dashboard />}></Route>
       <Route exact path='/contactus' element={<Contactus/>}></Route>
       <Route exact path='/alldatapage' element={<AlldataPage/>}></Route>
       <Route exact path='/userdetails' element={<UserDetails/>}></Route>
       <Route exact path="/home" element={<Home/>}></Route>
       <Route exact path="/login" element={<Loginpage2/>}></Route> 
       <Route exact path="/RestaurentFullDetails" element={<RestaurentFullDetails/>}> </Route>

       </Routes>
       
    )
}

export default Sidebar;