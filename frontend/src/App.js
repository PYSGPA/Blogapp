import './App.css';
import Blog from './components/BlogComponent/Blog';
import Contact from './components/ContactComponent/Contact';
import Nav from './components/NavComponent/Nav';
import Banner from './components/BannerComponent/Banner';
import Footer from './components/FooterComponent/Footer';
import Login from './components/LoginComponent/Login';
import Register from './components/RegisterComponent/Register';
import Home from './components/HomeComponent/Home';
import {Routes,Route} from 'react-router-dom' ;
function App() {
  return (
    <>
      <Nav/> 
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        {/* <Route path='/about' element={<About />}> </Route> */}
        <Route path='/Blog' element={<Blog />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<Register />}> </Route>
      </Routes>
      {/* <Blog /> */}
      {/* <Contact/> */}
      <Footer/>
      </>
  );
}

export default App;
