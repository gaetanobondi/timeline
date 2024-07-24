import { Routes, Route } from 'react-router-dom';
import RoadMap from './pages/RoadMap';
import Home from './pages/Home';
import People from './pages/People';
import NotFound from './pages/NotFound';
import Person from './pages/Person';

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/percorso" element={<RoadMap />} />
        <Route path="/persone" element={<People />} />
        <Route path="/persone/:name" element={<Person />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
