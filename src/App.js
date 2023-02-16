import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Main' element={<Main />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
