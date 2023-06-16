import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.Title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse  " data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">{props.Home}<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">{props.About}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">{props.Contactus}</Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li> */}
    </ul>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
      <div className="form-check form-switch" text-light>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>  
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = {Title: propTypes.string.isRequired, About: propTypes.string.isRequired} 

Navbar.defaultProps = {Title: "Set title here", About: "About here"};