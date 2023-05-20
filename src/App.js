import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar';
import NavComp from './Components/NavComp';
import Biscuits from './Components/Biscuits';
import Chocolates from './Components/Chocolates';
import DairyProducts from './Components/DairyProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
// import Footer from './Components/Footer'

// import logo1 from './choco/1.jpg'
import Home from './Components/Home';
function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }


  return (
    <>
    <BrowserRouter>
        <NavComp mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path='/' element={<Home mode={mode}/>}/>
          <Route exact path='/biscuits' element={<Biscuits mode={mode}/>}/>
          <Route exact path='/chocolates' element={<Chocolates mode={mode}/>}/>
          <Route exact path='/dairy_products' element={<DairyProducts mode={mode}/>}/>
          {/* <Route exact path='/dairy_products' element={<Footer />}/> */}


        </Routes>
    </BrowserRouter>
    {/* <img src={logo1} alt="" /> */}
    </>
  );
}

export default App;
