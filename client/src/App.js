import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Home from './pages/Home';
import Detail from './pages/header';
import Plot from './plot/plot';
import Market from './pages/home_news';
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
        <Route path='/market' element={<Market/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
