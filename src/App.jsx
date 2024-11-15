import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';


function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path = '/contact' element={<Contact />} />
   
   </Routes>
  )
}

export default App
