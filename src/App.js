import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Header from "./Components.js/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components.js/PrivateRoute";

const  App =() => {
  return (
    <>
    <Router>
      <Header />
<Routes>
<Route path ="/" element={<Home/>}/>
<Route path="/profile" element={<PrivateRoute/>}> 
<Route path ="/Profile" element={<Profile/>}/> 

</Route>

<Route path ="/forgot-password" element={<ForgotPassword/>}/> 
<Route path ="/Sign-up" element={<Signup/>}/> 
<Route path ="/Offers" element={<Offers/>}/> 
<Route path ="/Sign-in" element={<Signin/>}/> 

</Routes>

    </Router>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

<ToastContainer />
    </>
  );
}

export default App;
