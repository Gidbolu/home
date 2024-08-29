import React from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const navbar = () => {
  
    return (
      <div>
        <nav className="navbar nnav navbar-expand-lg navbar-light bg-light shadow p-3 bg-body rounded">
        <div className="container">
          <Link to={"/"} className="navbar-brand"><img className='w-75' src={Logo} alt='logo....'/></Link>
          {/* <a className="navbar-brand" href="/"><img className='w-75' src={Logo} alt='logo....'/></a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 ">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link to={"/"} className="nav-link active" >Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/">About</a> */}
                <Link to={"/About"} className="nav-link active" >About</Link>
              </li>
            </ul>

            <div className="bbt">
                <button class="btn btn-sm btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button>
                <button class="btn btn-sm btn-dark" type="button"><Link to={"/Courses"} className="nav-link active" >Courses</Link></button>
            </div>
          
          </div>
        </div>
      </nav>
      </div>
    )
  
}

export default navbar
