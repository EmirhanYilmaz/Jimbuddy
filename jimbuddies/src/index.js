import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import NoPage from "./containers/NoPage";
import Layout from "./containers/LoggedIn/Layout";
import Currentprogram from "./containers/LoggedIn/currentprogram/currentprogram";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="currentprogram" element={<Currentprogram />} />
          </Route>s 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);