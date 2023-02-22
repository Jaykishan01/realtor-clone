import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
 
const Profile = () => {
  const auth = getAuth()
  const navigate =useNavigate();
  const [changeDetail ,setChangeDetail] =useState(false)
  const[formData ,setFormData] =useState({
    name: auth.currentUser.displayName,
    email:auth.currentUser.email })

  const{name ,email} =formData;

  const onLogOut =()=>{
    auth.signOut()
    navigate('/')
  }

  const handelChange =()=>{
    changeDetail && onsubmit()
     setChangeDetail((prev)=>!prev)
  }

  const onChange=(e)=>{
  
setFormData((prev)=>({
  ...prev,
  [e.target.id]:e.target.value
}))
  }
  
 const onsubmit =async()=>{
  try {
    if(auth.currentUser.displayName!== name){
      //update the display name in firebase Authentication 
      await updateProfile(auth.currentUser,{
        displayName:name,
      })

     const docRef = doc(db,"users",auth.currentUser.uid)
     await updateDoc(docRef,{
      name,

     })
     toast.success("profile details updated")
    }
  } catch (error) {
    toast.error('Could not update the profile Details')
  }
 }
  return (
  <>
  <section className="max-w-6xl flex justify-center item center flex-col">

    <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
    <div className="w-full md:w-[50%] mt-6 px-3">
      <form>

        <input type ="text" id ="name" value ={name} disabled ={!changeDetail}
        onChange ={onChange}
        className={`mb-6 w-full px -4 py-2 text-xl-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`} />



        <input type ="email" id ="email" value ={email} disabled className="mb-6 w-full px -4 py-2 text-xl-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />

        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
          <p className="flex items-center mb-6">
            Do you want to change your Name ?
            <span
            
            
            onClick ={handelChange} className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-l cursor-pointer">

           {changeDetail ? "Apply Change" : "Edit"}

            </span>
          </p>
          <p onClick={onLogOut} className="text-blue-600 hover:text-blue-800 transition duration 200 ease-in-out cursor-pointer">Sign out</p>
        </div>


      </form>
    </div>
  </section>
  </>
  )
}

export default Profile