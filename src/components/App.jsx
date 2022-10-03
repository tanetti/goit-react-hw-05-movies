import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<div>Movies</div>} />
    </Route>
  </Routes>
);
