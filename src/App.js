import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Home from './Components/Home';
import NavBar from './Components/NavBar';



function App() {
  return (
    
      <div className='w-screen h-screen'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </div>
        
      
        
      
    
  );
}

export default App;
