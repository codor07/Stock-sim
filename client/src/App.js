import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Register/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
