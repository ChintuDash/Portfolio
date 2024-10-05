import {NavLink, Link} from 'react-router-dom';

function Navbar(){
  
    return(
     
           <div className="main">
            <div className="logo">               
                <h3><Link to="/" id="b">Chintu Dash</Link></h3>
            </div>
                <div className="box">                    
                  <h4><Link to="/About" id="a"> About</Link></h4>
                  <h4>  <Link to="/Contact" id="a">Contact</Link></h4>
                  <h4><Link to="/Skill" id="a">Skills</Link></h4>
                  <h4><Link to="/Education" id="a">Education</Link></h4>
                  <h4><Link to="/Project" id="a">Project</Link></h4>
                </div>
            </div>
  
      
    )
}
export default Navbar;