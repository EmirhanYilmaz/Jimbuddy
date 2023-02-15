import * as React from "react";
import "../trainingview/trainingview.css";
import "./allprograms/allprograms"
import "./createnewprogram/createnewprogram"
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Link, Outlet } from "react-router-dom";


const Trainingview=() => {
  return (  <>
        <div className="trainingnav">
      <Link to="currentprogram" className="navbarlinks">
        <Button variant="contained" className="trainingnavcontainer traniningnavbtn">
          Current program
        </Button>
      </Link>

      <Link to="allprograms" className="navbarlinks">
        <Button variant="contained" className="trainingnavcontainer traniningnavbtn">
          All programs
        </Button>
      </Link>

      <Link to="createprogram" className="navbarlinks">
        <Button variant="contained" className="trainingnavcontainer traniningnavbtn">
          Create new program
        </Button>
      </Link> 
   </div>
      <Outlet/>
      </>

    
   
    
   
  );
};

export default Trainingview;
