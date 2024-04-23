import React from 'react'
import {
  Link
} from "react-router-dom";
const Navbar = ()=>  {
    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color: "white"}}  to="/">PulsePoint</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{color: "white"}}  aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/science">Science</Link>
        </li>        
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/technology">Technology</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
      </>
    )
  }

export default Navbar
