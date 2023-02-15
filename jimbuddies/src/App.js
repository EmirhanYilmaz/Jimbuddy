import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Forum from "./containers/LoggedIn/Forum";
import Progresspics from "./containers/LoggedIn/Progresspics";
import Layout from "./containers/LoggedIn/Layout";
import Trainingview from "./containers/LoggedIn/trainingview/trainingview";
import Currentprogram from "./containers/LoggedIn/trainingview/currentprogram/currentprogram";
import {Createnewprogram} from "./containers/LoggedIn/trainingview/createnewprogram/createnewprogram";
import Allprograms from "./containers/LoggedIn/trainingview/allprograms/allprograms";
import  "./containers/LoggedIn/trainingview/createnewprogram/createnewprogram.css";
import "../src/styles/index.css"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/training" element={<Trainingview/>} >
            <Route path="currentprogram" element={<Currentprogram/>} />
            <Route path="allprograms" element={<Allprograms/>} />
            <Route path="createprogram" element={<Createnewprogram/>} />
          </Route>
          <Route path="signup" element={<SignUp/>} />
          <Route path="forum" element={<Forum/>} />
          <Route path="progresspics" element={<Progresspics/>} />


          

        {/* <Route path="/" element={<Layout />}>
          <Route path="trainingview" element={<Trainingview />} >
            <Route path="currentprogram" element={<Currentprogram />} />
            <Route path="allprograms" element={<Allprograms />} />
            <Route path="createnewprogram" element={<Createnewprogram />} />
          </Route>
          <Route path="forum" element={<Trainingview />} />
          <Route path="progresspics" element={<Trainingview />} />
        </Route> */}
{/* 
        <Route path="trainingview" element={<Layout />}>
          <Route path="allprograms" element={<Allprograms />} />
          <Route path="createnewprogram" element={<Createnewprogram />} />
        </Route>
 */}
        {/* <Route path="home" element={<Home />} />
        <Route path="signin" element={<Home />} />
        <Route path="signup" element={<SignUp />} /> */}

      </Routes>
      <Layout />


    </BrowserRouter>
  );
}
