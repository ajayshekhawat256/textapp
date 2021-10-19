import './App.css';
// import { Textform } from './Component/Textform'; 
// import About from './Component/About';
import Navbarr from './Component/Navbarr';
import React, { useState } from 'react'
import Alert from './Component/Alert';
// import {
//    BrowserRouter as Router,   Switch,
//    Route
//  } from "react-router-dom";


import {Textform} from './Component/Textform';
function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
     {/* <Router>  */}
    <Navbarr title="TextUtils" mode={mode}  About="About" togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
     {/* <Switch> 
           <Route path="/about">
            <About />
          </Route> 
           <Route path="/">  */}
            <Textform  heading="Enter the text to Analyze below" /> 
           {/* </Route>
        </Switch>  */}
    </div>
    {/* </Router>  */}
    </>
    );
}
export default App;
