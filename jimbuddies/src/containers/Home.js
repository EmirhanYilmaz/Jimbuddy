import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/global.css';

import * as React from 'react';
import Button from '@mui/material/Button';
<link rel="stylesheet" href="https://use.typekit.net/gou7jkt.css"></link>

export function Home() {
  return (
        <div className="LandingPage LandingImg">
          <div className="LandingPageContent">
            
            <h1 className="HeroWhiteColor font-link">Welcome to your JimBuddy!</h1>
            <h2 className="HeroWhiteColor font-link">Log in to continue</h2>
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
              Sign in
            </Button>
            <li className="signuplink font-link">
              <Link to="/SignUp" className='signuplink'>Don't have an account? Create one!</Link>
            </li >
            </div>
           
           
          </div>
          
        </div>
       
  );
}

export default Home;
