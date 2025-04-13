import './App.css';
import Blog from './components/BlogComponent/Blog';
import Contact from './components/ContactComponent/Contact';
import Nav from './components/NavComponent/Nav';
import Footer from './components/FooterComponent/Footer';
import Login from './components/LoginComponent/Login';
import Register from './components/RegisterComponent/Register';
import Home from './components/HomeComponent/Home';
import {Routes,Route} from 'react-router-dom' ;
import Logout from './components/LogoutComponent/Logout'
import AdminHome from './components/AdminHomeComponent/AdminHome'
import UserHome from './components/UserHomeComponent/UserHome'
import EpAdmin from './components/EpAdminComponent/EpAdmin'
import ManageUser from './components/ManageUserComponent/ManageUser'
import EpUser from './components/EpUserComponent/EpUser';
import Verifyuser from './components/VerifyUserComponent/VerifyUser';
import AddBlog from './components/AddBlogComponent/AddBlog';
import CpUser from './components/CpUserComponent/CpUser';
import ViewBlog from './components/ViewBlogComponent/ViewBlog';
function App() {
  return (
    <>
      <Nav/> 
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/admin' element={<AdminHome />}> </Route>
        <Route path="/user" element ={<UserHome />} ></Route>
        {/* <Route path='/about' element={<About />}> </Route> */}
        <Route path='/Blog' element={<Blog />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<Register />}> </Route>
        <Route path="/manageuser" element ={<ManageUser />} ></Route>
        <Route path="/epadmin" element ={<EpAdmin />} ></Route>
        <Route path="/epuser" element ={<EpUser />} ></Route>
        <Route path="/logout" element ={<Logout />} ></Route>
        <Route path="/verify/:email" element ={<Verifyuser />} ></Route>
        <Route path='/addblog' element = {<AddBlog />}></Route>
        <Route path='/cpuser' element={<CpUser/>}></Route>
        <Route path='/viewblog' element={<ViewBlog/>}></Route>
      </Routes>
    
      {/* <Blog /> */}
      {/* <Contact/> */}
      <Footer/>
      </>
  );
}

export default App;
