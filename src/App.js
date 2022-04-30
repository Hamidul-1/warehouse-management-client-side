import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/footer" element={<Footer></Footer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
