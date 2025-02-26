import React,{ useContext} from 'react'
import { NavLink } from 'react-router'
import { ThemeContext } from '../../context/ThemContext'


export default function Navbar() {
  const{darkMode,setDarkMode}=useContext(ThemeContext);
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-1 logo " style={{ color: 'brown' }} to="/">ᴍᴏᴠɪᴇ ʜᴜʙ</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex gap-5 fw-bold fs-5 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Fav">Favorites</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/People">People</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
      <button className='mode' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </nav>
    <br />
    
  </>
}
