import '../styles/Home.css';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function SignUp() {
    return( 
            <div className="LandingPage LandingImg">
            <div className="LandingPageContent">
                <h1 className="HeroWhiteColor">Sign up now to start using Jimbuddy!</h1>
                <div className="LoginForm">
                <input className="InputFields" type="text" id="email" name="e-mail" placeholder="E-mail">
                </input>
                </div>
                <div className="LoginForm"> 
                <input className="InputFields" type="text" id="password" name="password" placeholder="Password">
                </input>
                </div>
                <div className="btnContainer">
                <Button variant='contained' className="btnLandingPage font-link">
                    Sign up
                </Button>
                <a href="/" className="signuplink">
                Go back
                </a >
                </div>
            
            
            </div>
            
            </div>
        
        );
    }


