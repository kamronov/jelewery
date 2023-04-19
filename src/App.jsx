import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import Header from './components/Header/Header'
import Menu from './pages/Home/Home';
import About from './pages/AboutSwiper/AboutSwipper';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about/:slug' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
