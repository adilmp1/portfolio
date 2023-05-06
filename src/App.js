import React,{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import { useState } from 'react';
function App() {
  const [menu,setMenu] = useState('ri-menu-line');
  const [style,setStyle] = useState({marginLeft:'-200px'})
  const navBarMoveMent = () =>{
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navMove')
    if(menu==='ri-menu-line')
    {
      setMenu('ri-close-fill')
    }
    else
    {
      setMenu('ri-menu-line')
    }
  }
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"/>
      <Router>
          <header>
            <div onClick={()=>navBarMoveMent()} className='menu'><i class={menu}></i></div>
            <ul className='navbar navMove'>
                <Link to="/"><li onClick={()=>navBarMoveMent()} className='nav'>Home</li></Link>
                <Link to="/about"><li onClick={()=>navBarMoveMent()} className='nav'>About</li></Link>
                <Link to="/skills"><li onClick={()=>navBarMoveMent()} className='nav'>Skills</li></Link>
                <Link to="/contact"><li onClick={()=>navBarMoveMent()} className='nav'>Contact</li></Link>
            </ul>
          </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
