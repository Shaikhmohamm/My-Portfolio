import React from "react";
import img from '../assets/zaid.webp'
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="">
      <nav className=" position-relative navbar navbar-expand-md bg-dark border-bottom border-body m-0" data-bs-theme="dark">
        <a className="navbar-brand" href="#">
          <img className="mx-5" src={img} alt="Bootstrap" width="50" height="50" />
        </a>
        <div className="position-absolute start-50 ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="navbar-collapse collapse justify-content-start ">
          <div className=" navbar-nav ml-auto">
            <div className="collapse navbar-collapse mx-2" id="navbarNav">.
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link to='/' className="navbar-brand text-warning-emphasis" href="#">Home</Link>
                </li>
                <li className="nav-item ">
                  <Link to='about' className="navbar-brand text-warning-emphasis " href="#">About</Link>
                </li>
                <li className="nav-item ">
                  <Link to='skills' className="navbar-brand text-warning-emphasis " href="#">Skills</Link>
                </li>
                <li className="nav-item ">
                  <Link to='projects' className="navbar-brand text-warning-emphasis " href="#">Projects</Link>
                </li>
                <li className="nav-item ">
                  <Link to='blogs' className="navbar-brand text-warning-emphasis " href="#">Blogs</Link>
                </li>
                <li className="nav-item ">
                  <Link to='contacts' className="navbar-brand text-warning-emphasis " href="#">Contacs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid justify-content-end">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>

  );
}

export default NavBar;