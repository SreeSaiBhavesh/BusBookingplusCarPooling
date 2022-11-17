import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Bus from './pages/Bus/Bus';
import Buses from './pages/buses/Buses';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cars from './pages/cars/Cars'
import Car from './pages/Car/Car'
import Carsdirect from './pages/Carsdirect/Carsdirect';
import About from './pages/About/About'
import Success from './pages/Success/Success'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buses' element={<Buses />} />
            <Route path='/buses/:id' element={<Bus />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/cars/cars' element={<Carsdirect />} />
            <Route path='/cars/cars/:id' element={<Car />} />
            <Route path='/about' element={<About />} />
            <Route path='/success' element={<Success />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
