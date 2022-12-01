import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route ,Routes} from  'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
    
    <Route index path="/" element={<Home/>}  />
    <Route path="/about" element={<About/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
