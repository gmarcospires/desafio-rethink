import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Desafio1 } from './pages/desafio1';
import { Desafio2 } from './pages/desafio2';
import { Outros } from './pages/outrosDesafios';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/desafio-1' element={<Desafio1 />} />
        <Route path='/desafio-2' element={<Desafio2 />} />
        <Route path='/outros' element={<Outros />} />
      </Routes>
    </Router>
  );
}

export default App;
