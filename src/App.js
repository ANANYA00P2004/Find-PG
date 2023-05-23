import Hero from './pages/hero'
import './App.css';
import Login from './pages/login/login';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    
    
    </BrowserRouter>
    
    
  );
}

export default App;
