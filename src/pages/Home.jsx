import React from 'react';
import illustration from '../assests/illustration.png';
import { Link, Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">
             <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary text-white flex-column"> 
               <h1 className='display-2 title text-uppercase text-center'>
                An App to <br />  Make your life  <br /> <span className='display-1'> easy </span>
               </h1>
               <img  className='img-fluid mt-3'  src={illustration} alt="illustration" />
               </div>  

               <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center"> 
               <div className="card auth-card">
                <div className="card-header bg-transparent border-0 d-flex text-center">
                    <Link className='w-50 py-3 bg-white text-primary' to="/login">Login</Link>
                    <Link className='w-50 py-3 bg-primary text-white' to="/register">Register</Link>

                </div>
                <div className="card-body">
                    <Outlet/>
                </div>
               </div>
               
               </div>  

            </div>
        </div>
    );
}

export default Home;