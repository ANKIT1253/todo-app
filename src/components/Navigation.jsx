import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import logo from '../assests/logo.png';
function Navigation(props) {

   const {user, logout} = useContext(AuthContext);
 
      

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {
          !user ? 
             <>  
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        </> :

        <>  
        <li className="nav-item">
          <Link className="nav-link" to="/Create-task">Create Task</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="task-list">Task List</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="profile">Profile   
          </Link>
        </li>


        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {user?.name}    {/* {user ? user.name : ""} check if data exists before rendering the property */ }
         { /*we can use option property syntax */}
        


          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={logout}> Logout</li>
            
          </ul>
        </li>
        </>
}
      </ul>
     
    </div>
  </div>
</nav>
    );
}

export default Navigation;