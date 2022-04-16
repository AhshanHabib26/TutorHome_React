import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Component/Pages/Blog/Blog';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
