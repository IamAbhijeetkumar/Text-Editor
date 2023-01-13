// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { Route, Routes} from "react-router-dom";





function App() {
  const [mode, setMode] = useState('dark'); //to activate dark mode
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212510';
      showAlert("Switched to Dark mode successfully", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Switched to light mode successfully", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my5'>
        <Routes>
          <Route path ='/about' element={<About />} />
          <Route path ='/' element={<Textform showAlert={showAlert} heading="Enter Text Here To Convert It " Example="" mode={mode} />}/>
        </Routes>
      </div>
    </>
  );
}
 
export default App;

