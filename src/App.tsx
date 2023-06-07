import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutLogged from './layouts/LayoutLogged';
import PageNotFound from './layouts/PageNotFound';

import Home from './pages/home';
import Contracts from './pages/contracts';

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
