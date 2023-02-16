import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Main from './components/ProductGallery';
import Header from './components/Header';
import Home from './components/Home'
import './App.css';
import ProductGallery from './components/ProductGallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/main' element={<ProductGallery />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
