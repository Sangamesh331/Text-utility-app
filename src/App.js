import './App.css';
import Navbar from './Components/Navbar';
import Textbar from './Components/Textbar';
import Alert from './Alert';
import About from './Components/About';
// import Corosel from './Components/Corosel';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"; 
import Contactus from './Components/Contactus';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
  setAlert({
  msg: message,
  type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);    
}

const toggleMode = ()=>{
  if ( mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey';
    showAlert ("You have switched to dark mode", "Holy guacamoly  !")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert ("You have switched to Light mode", "Holy guacamoly  !")
  }
}
  return (<>
   <Router>
   {<Navbar Title = "NERD" About = "About us" Home = "Safe House" Contactus = "Contact US" toggleMode={toggleMode} mode={mode}/>}
   <h1 style={{border:'3px solid black' }} className="font - italic, text-center"> Your very own text analiser </h1>
   <Alert alert={alert}/>
  <div className = "container my-3  ">
    <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/Home" element={<Textbar label = "type your text in the below box to analyze" mode ={mode} showAlert={showAlert}/>}>
            </Route>
            <Route path="/" element={<Contactus />}>
            </Route>
          </Routes>
        </div>
  </Router>
  </>
  );
}


export default App;
