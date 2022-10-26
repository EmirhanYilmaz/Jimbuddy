import '../styles/LoggedIn.css';
import * as React from 'react';
import Button from '@mui/material/Button';
export default function LoggedIn() {
    return(
            <div className="LoggedInContainer">
                <div className='contentcontiner'>
                    <div className='trainingnav'>
                        <div className='trainingnavcontainer'>Current program</div>
                        <div className='trainingnavcontainer'>Programs</div> 
                        <div className='trainingnavcontainer'>Create new program</div>
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
        
        );
    }


