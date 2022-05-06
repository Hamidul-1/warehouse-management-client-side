import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
