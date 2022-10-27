import '../LoggedIn/Layout.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Outlet } from "react-router-dom";


const Layout=() => {
    return(
        <>
         <div className="LoggedInContainer">
                <div className='contentcontiner'>
                    <div className='trainingnav'>
                    <Link to="currentprogram" className='signuplink'>
                    <Button variant="contained" className='trainingnavcontainer'>Current program</Button>
                    </Link>
                        <Button variant="contained" className='trainingnavcontainer'>All programs</Button>
                        <Button variant="contained" className='trainingnavcontainer'>Create new program</Button>
                    </div>
                </div>

                <div className="navbar">
                    <div className="navbarcirclecontainer">
                    <Button variant='contained' className="navbarcircle"></Button>
                    <a className="navbarcircletxt">Training</a>
                    </div>
                    
                    <div className="navbarcirclecontainer">
                    <Button variant='contained' className="navbarcircle"></Button>
                    <a className="navbarcircletxt">Forum</a>
                    </div>

                    <div className="navbarcirclecontainer">
                    <Button variant='contained' className="navbarcircle"></Button>
                    <a className="navbarcircletxt">Progress pics</a>
                    </div>
                    
                </div>  
            </div>

            <Outlet />

        
        </>
           
        )
    };

export default Layout


