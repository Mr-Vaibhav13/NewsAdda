import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



export default class Navbar extends Component {


   
  render() {
    return (
        // let {title,desc} = this.props;
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">NewsAdda</button></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
     <Link className="nav-link" aria-current="page" to="/"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Home</button></Link>
      </li>
      
      <li className="nav-item"><Link className="nav-link" to="/business"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Business</button></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/entertainment"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Entertainment</button></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/general"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">General</button></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/health"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Health</button></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/science"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Science</button></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/sports"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Sports</button></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/technology"><button style={{backgroundColor:'transparent' , border:"none" }} type="button" onClick="window.location.reload()">Technology</button></Link></li>
                             


      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
