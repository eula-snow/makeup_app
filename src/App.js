import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Main from './components/ProductGallery'; import Header from './components/Header';
import Home from './components/Home'
import './App.css';
import ProductGalleryLayout from './components/ProductGalleryLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/main' element={<ProductGalleryLayout />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
