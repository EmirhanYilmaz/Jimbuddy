import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import NoPage from "./containers/NoPage";
import LoggedInMain from "./containers/LoggedIn/LoggedInMain";
import LoggedIncurrentprogram from "./containers/LoggedIn/LoggedIn.currentprogram";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/LoggedIn/training" element={<LoggedInMain />} >
           <Route path="currentprogram" element={<LoggedIncurrentprogram />} />
{/*            <Route path="allprograms" element={<LoggedInMain />} />
 */}          </Route>
            
          <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);