import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Body from './components/body';
import SignIn from './components/Signin';
import Loading from 'react-loading';
import Quote from './components/quote/Quote.js';
 import '@fortawesome/fontawesome-free/css/all.css';
 import '@fortawesome/fontawesome-free/js/all.js';
 import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  console.log('Username: "Jaspreet" Password: "Jass@" ');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (username, password) => {
    setIsLoading(true);
    setTimeout(() => {
      if (username === 'Jaspreet' && password === 'Jass@') {
        setIsAuthenticated(true);
        toast.success(`Welcome, ${username}!`, { autoClose: 4000 });
      } else {
        toast.error('Invalid! The credentials are given below');
      }
      setIsLoading(false);
    }, 2000);
  };
  

  return (
     <>
      <ToastContainer />
      {isLoading ? (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        >
          <Loading type="spin" color="#fff" />
        </div>
      ) : null}
      {isAuthenticated ? (
        <>
         <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Body  /> }/>
        <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
       
      </>
   ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
