import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sensmap } from './pages/Sensmap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sensmap" element={<Sensmap />} />
    </Routes>
  );
}

export default App;
