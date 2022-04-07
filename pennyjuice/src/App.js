import './App.css';
import Home from './Pages/Home';
// import { Router, Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  
  Route,

  Routes,
}from "react-router-dom";


function App() {
  return (
    <>
    <Router>

  
    <div className="App">

    <Routes>
     <Route path ="/" element = {<Home/>}></Route>

   
     </Routes>
     
      
    </div>
    </Router>
    </>
  );
}

export default App;
