import React  from 'react';
import { useState,useContext } from "react";
import AuthContext from '../Context/AuthContext';

function Profile(props) {
    const init ={
        title: ""
    }


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }
    const [formData,setFormData]=useState();

    const {user} = useContext(AuthContext);
    return (
        <> 
        <div className='container p-4 mt-5 bg-primary text-white '>

       

     <button> Edit Profile</button>
    
    <form>
    <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" className='form-control'   />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className='form-control'   />

             
           </div>
    </form>
    </div>
    </>
    );
    }

export default Profile;