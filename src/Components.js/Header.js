
import { useState ,useEffect } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import {getAuth, onAuthStateChanged} from "firebase/auth"
const Header = () => {

    const[pageState , seTPAgeState] =useState("sign-in")
    const location =useLocation()
    console.log(location.pathname)
    const Navigate =useNavigate();
    const auth =getAuth();

    useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        seTPAgeState("profile")
      }else{
        seTPAgeState("sign-in")
      }
    })
    },[auth])


    

    function pathMatchRoute(route) {
      if (route === location.pathname) {
        return true;
      }
    }
   

  return (
    <div className='bg-white boarder  -b shadow -sm sticky top-0 z-50'>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>

        <div >

            <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' className='h-5 cursor-pointer'
            
            onClick ={()=>Navigate("/")}/>
          
        </div>

        <div>
            <ul className='flex space-x-10'>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && 'text-black  border-b-red-500'
              }`}
                  onClick ={()=>Navigate("/")}
            >
              Home
            </li>
         <li
         className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
          pathMatchRoute("/offers") && " text-black border-b-red-500"
        }`}
        onClick ={()=>Navigate("/offers")}>Offers</li>
         <li
         className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
         ( pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black  border-b-red-500"
        }`}
        
        onClick ={()=>Navigate("/profile")}
        >
          {pageState}
        </li>
            </ul>
      

        </div>
    </header>
    </div>
  )
}

export default Header