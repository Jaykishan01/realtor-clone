import React from 'react'
import { Outlet,Navigate} from 'react-router-dom';

const PrivateRoute = () => {

    const loggedIn =false;
    return loggedIn ?<Outlet/>:<Navigate to="sign-in"/>

  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute