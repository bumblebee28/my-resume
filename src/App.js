import './App.css';
import Profile from './components/Profile';
import Home from './components/Home'
import { Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Profile></Profile>
    <Home></Home>
    </>
  );
}

export default App;
