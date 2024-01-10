import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Map from './components/map';
import Tutorial from './components/tutorial';
import Login from './components/login';
import Register from './components/register';
import Forgot from './components/forgot';

function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/tutorial' element={<Tutorial/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
