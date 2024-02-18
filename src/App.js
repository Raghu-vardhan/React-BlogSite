import Home from "./components/home";
import React from "react";
import Write from "./pages/write/Write";
import Login from "./pages/Login/Login";
import Registor from "./pages/registor/registor";
import Setting from "./pages/settings/Setting";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SinglePost from "./components/sinlePage/singlePost";
import About from "./components/About/About";



function App() {
 
  return (
      <Router>
        {/* <Topbar/> */}
          <Routes>
          <Route path='/' element={ <Registor/> } ></Route>

          <Route path='/login'  element={<Login/>}></Route>
          <Route path='/logout'  element={<Login/>}></Route>
          <Route path='/home'  element={<Home/>}></Route>
          <Route path='/about'  element={<About/>}></Route>
          <Route path='/registor' element={<Registor/>}></Route>
          <Route path='/settings' element={<Setting/>}></Route>
          <Route path='/write' element={ <Write/>}></Route>  
          <Route path='/singlepost/:id' element={<SinglePost/>}></Route> 
          </Routes>
    </Router>
    
  );
}

export default App;
