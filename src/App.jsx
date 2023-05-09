import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPass from "./pages/ForgotPass";

const App = () => {
  
  const [session, setSession] = useState(null);

  const [alert, setAlert] = useState({alert: "", show: false});

  const handleAlert = (message)=>{
    setAlert({alert: message, show: true});
    setTimeout(()=>{
      setAlert({alert: '', show: false});
    }, 5000);
  }

  useEffect(() => {
    const sessionData = sessionStorage.getItem('session');
    if (sessionData) {
      setSession(JSON.parse(sessionData));
    }
  }, []);


  return (
  
      <Routes>
        <Route 
          path="/" 
          element={<Landing session={session}/>} 
        />
        <Route
          path="/signup"
          element={<SignUp session={session} handleAlert={handleAlert}  alert={alert}/>}
        />
         <Route
          path="/forgotPass"
          element={<ForgotPass handleAlert={handleAlert}  alert={alert}/>}
        />
        <Route
          path="/signin"
          element={<SignIn session={session} setSession={setSession} handleAlert={handleAlert} alert={alert}/>}
        />
        <Route path="/dashboard/*" element={<Dashboard session={session} setSession={setSession}/>}/>
      </Routes>
    
  );
};

export default App;
