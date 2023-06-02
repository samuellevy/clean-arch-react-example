import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LayoutLogged from './layouts/LayoutLogged';
import Contracts from './pages/Contracts';
import PageNotFound from './layouts/LayoutLogged/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLogged />}>
          <Route index element={<Home />} />
          <Route path="/contracts" element={<Contracts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
