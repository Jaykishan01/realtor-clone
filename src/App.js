import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Header from "./Components.js/Header";


const  App =() => {
  return (
    <>
    <Router>
      <Header />
<Routes>
<Route path ="/" element={<Home/>}/> 
<Route path ="/Profile" element={<Profile/>}/> 
<Route path ="/forgot-password" element={<ForgotPassword/>}/> 
<Route path ="/Sign-up" element={<Signup/>}/> 
<Route path ="/Offers" element={<Offers/>}/> 
<Route path ="/Sign-in" element={<Signin/>}/> 

</Routes>

    </Router>
    </>
  );
}

export default App;
