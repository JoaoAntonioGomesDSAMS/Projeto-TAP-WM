import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import About from './Screens/About';
import Cadastrar from './Screens/Register';
import Store from './Screens/Store';

import PublicLayout from './components/PublicLayout';
import Painel from './Screens/Painel';
import Products from './Screens/Products';
import Brand from './Screens/Brand';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout PÚBLICO com navbar e logo */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Cadastrar />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Layout ADMIN (sem navbar, sem logo) */}
        <Route path="/painel" element={<Painel />}>
          <Route path="products" element={<Products />} />
          <Route path="brand" element={<Brand />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
