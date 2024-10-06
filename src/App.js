
import Navbar from "./Component/Navebar.js";
import Body from './Component/Body.js';
import About from './Component/About.js';
import Contact from "./Component/Contact.js";
import Skill from "./Component/Skills.js";
import Education from "./Component/Education.js";
import Project from "./Component/Project.js";

import { Routes,Route} from 'react-router-dom'; 
import { HashRouter } from "react-router-dom";
import './Style/Navbar.css'
import './Style/Body.css'
import './Style/About.css'
import './Style/Contact.css'
import './Style/Skills.css'
import './Style/Education.css'
import './Style/Project.css'
function App() {
  return (
    <div>
      <HashRouter>
         <Navbar/>
         <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Skill" element={<Skill/>}/>
            <Route path="/Education" element={<Education/>}/>
            <Route path="/Project" element={<Project/>}/>
            
         </Routes>
      </HashRouter>   
    
      </div>
  );
}
export default App;
