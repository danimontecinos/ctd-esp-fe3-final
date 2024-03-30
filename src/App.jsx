import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import React, { useState } from 'react'
import ThemeContext, { themes } from './Components/utils/global.context'


function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
  if (theme === themes.dark) setTheme(themes.light)
  if (theme === themes.light) setTheme(themes.dark)
  }
  
  return (
    
    <div className="App">
   
    <Navbar/>
    
    <Router>
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Routes>
          <Route path="/home" element={Home} />
          <Route path="/contact" element={Contact} />
          <Route path="/detail:id" element={Detail} />
          <Route path="/favs" element={Favs} />
      </Routes>
      </ThemeContext.Provider>
    </Router>
   
    <Footer/>
    
   </div>
   
  );
}

export default App;
