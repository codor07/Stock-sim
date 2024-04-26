import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Plot from './plot/plot';
import Profile from './Profile/profile'
function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
      <Route path='/details' element={<Detail/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/plot' element={<Plot/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
