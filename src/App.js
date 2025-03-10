import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom';
import NotFount from './components/NotFound';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFount />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
