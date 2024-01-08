import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing";
import './App.css';
import TakeitCheesy from "./datatable/TakeitCheesy";
import RestaurentFullDetails from "./sidenav/restaurentfulldetails";
// import { useDispatch, useSelector } from "react-redux";

function App() {

  // const dispatch=useDispatch();
  // const stateName= useSelector(state => state.stateName)
  // console.log(stateName)

  return (
    <>
    <Router>
      <Routing/>
      </Router>
      

  {/* <RestaurentFullDetails/>     */}

  {/* <TakeitCheesy/> */}
      

    {/* <button onClick={() => dispatch({type:"firstState"})}>Get Name</button>
    {stateName.map(list => list.stateName)} */}
     
      </>
  );
}

export default App;
