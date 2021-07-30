import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
       
      <div id="header-section">
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="/">
          <img className="navbar-logo-img" src="/images/logo2.png" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-md-auto">
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-cart4"></i></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item d-flex align-items-center">
          <Link className="nav-link sign-up-link" to="/signIn">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div className="header-content">
     <img className="img-fluid" src="/images/bannerbackground.png" alt="" />
     <div className="image-content">
        <h3>Best food waiting for your belly!</h3>
        <form className="d-flex search-bar">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     </div>
  </div>
      </div>

   
    );
};

export default Header;