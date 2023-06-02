import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutLogged from './view/layouts/LayoutLogged';
import PageNotFound from './view/layouts/PageNotFound';

import Home from './view/pages/home';
import Contracts from './view/pages/contracts';

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
