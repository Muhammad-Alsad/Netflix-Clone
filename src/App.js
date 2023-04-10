import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Routes, Route } from 'react-router';
import FavList from './components/FavList/FavList';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
