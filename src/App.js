import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Component/Pages/AboutMe/AboutMe';
import Blog from './Component/Pages/Blog/Blog/Blog';
import Checkout from './Component/Pages/Checkout/Checkout';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import Login from './Component/Pages/RegisterPage/LoginPage/Login';
import Signup from './Component/Pages/RegisterPage/SignupPage/Signup';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout/>
            </RequireAuth>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
