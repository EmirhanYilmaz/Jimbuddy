import '../LoggedIn/Layout.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Outlet } from "react-router-dom";


const Layout=() => {
    return(
        <>
           
                <div className="navbar">
                    <div>
                        <Link to='trainingview' className='navbarcirclecontainer' >
                            <Button variant='contained' className="navbarcircle"></Button>
                            <a className="navbarcircletxt">Training</a>
                        </Link>
                    
                    </div>
                    
                    <div>
                        <Link to='forumview' className='navbarcirclecontainer' >
                            <Button variant='contained' className="navbarcircle"></Button>
                            <a className="navbarcircletxt">Forum</a>
                        </Link>
                    
                    </div>

                    <div>
                        <Link to='progresspicview' className='navbarcirclecontainer' >
                            <Button variant='contained' className="navbarcircle"></Button>
                            <a className="navbarcircletxt">Progress pics</a>
                        </Link>
                    
                    </div>
                    
                </div>  

            <Outlet />

        
        </>
           
        )
    };

export default Layout


