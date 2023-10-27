import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

   useEffect(()=>{
    const local = localStorage.getItem("user");
   if(local){
    setIsLoggedIn(true);
   }
   else{
    setIsLoggedIn(false);
    navigate('/')
   }
    
},[]);


return (
    <div> {isLoggedIn ? children : null}</div>
);
}

export default ProtectedRoute;