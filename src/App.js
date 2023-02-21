import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/ProductGallery";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";
import ProductGalleryLayout from "./components/ProductGalleryLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./components/MainLayout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<ProductGalleryLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
