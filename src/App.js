import React from 'react';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Blogs from './Components/Blogs';
import Home from './Components/Home';



function App() {
  return (
    
      <div className='parent'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Contacts/>
      </div>
        
      
        
      
    
  );
}

export default App;
