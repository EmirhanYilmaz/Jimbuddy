import '../styles/App.css';

export default function SignUp() {
    return(
            <div className="LandingPage LandingImg">
            <div className="LandingPageContent">
                <h1 className="HeroWhiteColor">Welcome!</h1>
                <h2 className="HeroWhiteColor">sign in to continue</h2>
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
                <a href="google.com" className="signuplink">
                Don't have an account? Create one!
                </a >
                </div>
            
            
            </div>
            
            </div>
        
        );
    }


