import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Component/Pages/Blog/Blog';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/RegisterPage/LoginPage/Login';
import Signup from './Component/Pages/RegisterPage/SignupPage/Signup';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
