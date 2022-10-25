import { Link } from 'react-router-dom';
import '../styles/Home.css';

export function Home() {
  return (
        <div className="LandingPage LandingImg">
          <div className="LandingPageContent">
            <h1 className="HeroWhiteColor">Welcome to your JimBuddy!</h1>
            <h2 className="HeroWhiteColor">Log in to continue</h2>
            <div className="LoginForm">
              <input className="InputFields" type="text" id="email" name="e-mail" placeholder="E-mail">
              </input>
            </div>
            <div className="LoginForm">
              <input className="InputFields" type="text" id="password" name="password" placeholder="Password">
              </input>
            </div>
            <div className="btnContainer">
            <button className="btnLandingPage">
              Sign in
            </button>
            <li className="signuplink">
              <Link to="/SignUp">Don't have an account? Create one!</Link>
            </li >
            </div>
           
           
          </div>
          
        </div>
       
  );
}

export default Home;
