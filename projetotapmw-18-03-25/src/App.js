import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import About from './Screens/About';
import Cadastrar from './Screens/Register'
import Product from './Screens/Product'
import NavBar from './components/Navbar';//ifydtfuygujipkjhgyfdtryughjkl,
//importante (add pelo prof, serve pra afirma as rotas)
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
 
        <div className="App-fundo" alt="fundo"></div>
       
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Cadastrar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
 
export default App;