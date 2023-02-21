import { useState } from "react"
const Profile = () => {
  const auth = getAuth()
  const[formData ,setFormData] =useState({
    name: auth.currentUser.displayName,
    email:auth.currentUser.email })

  const{name ,email} =formData;
  return (
  <>
  <section className="max-w-6xl flex justify-center item center flex-col">

    <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
    <div className="w-full md:w-[50%] mt-6 px-3">
      <form>

        <input type ="text" id ="name" value ={name} disabled className="mb-6 w-full px -4 py-2 text-xl-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />



        <input type ="email" id ="email" value ={email} disabled className="mb-6 w-full px -4 py-2 text-xl-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />

        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
          <p className="flex items-center mb-6">
            Do you want to change your Name ?
            <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-l cursor-pointer">Edit</span>
          </p>
          <p className="text-blue-600 hover:text-blue-800 transition duration 200 ease-in-out cursor-pointer">Sign out</p>
        </div>


      </form>
    </div>
  </section>
  </>
  )
}

export default Profile