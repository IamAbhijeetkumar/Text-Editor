import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">FAQ</a>
              </li>
            </ul>
            <div className='d-flex'>
              <div onClick={() => (props.toggleMode('primary'))} className="bg-primary rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
              <div onClick={() => (props.toggleMode('success'))} className="bg-success rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
              <div onClick={() => (props.toggleMode('warning'))} className="bg-warning  rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
              <div onClick={() => (props.toggleMode('danger'))} className="bg-danger rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>~
            </div>
          </div>
        </div>
      </nav></>
  )
}