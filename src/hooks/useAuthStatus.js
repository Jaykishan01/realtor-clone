      import React, { useState } from 'react'
      
      const useAuthStatus = () => {
        const[loggedIn ,setLoggedIn] = useState(false)
        const[checkingStatus,setCheckingStatus] =useState(true)
        
        return (
          <div>useAuthStatus</div>
        )
      }
      
      export default useAuthStatus