import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Home from './pages/Home';
import Plot from './plot/plot';
import Search from './plot/searchplot';
import Profile from './Profile/profile'
function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/'element={<Navigate to="/login" />}></Route>
        <Route  path='/home' element={<Home />}></Route>
        <Route  path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/plot' element={<Plot/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
