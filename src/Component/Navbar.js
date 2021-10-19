import React from 'react'
export default function Navbar(propss) {
  return (

    <nav classNameName={`navbar navbar-expand-lg navbar-${propss.mode} bg-${propss.mode}`}>
      <div classNameName="container-fluid">
        <a classNameName="navbar-brand" href="/">{propss.title}</a>
        <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <a classNameName="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link active" href="/">{propss.About}</a>
            </li>
          </ul>
           <form classNameName="d-flex">
            <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button classNameName="btn btn-outline-success" type="submit">Search</button>
          </form> 
          <div className="form-check form-switch text-light">
            <input className="form-check-input" onClick={propss.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}