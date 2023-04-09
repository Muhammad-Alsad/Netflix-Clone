import Home from './components/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/FavMovie' element={<FavMovie/>}/> */}
      </Routes>

    </>
  );
}

export default App;
