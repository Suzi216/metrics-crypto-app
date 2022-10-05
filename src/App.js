import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </>
);

export default App;
