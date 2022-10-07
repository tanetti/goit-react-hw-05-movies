import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<div>Movies</div>} />
      <Route path="movies/:movieID" element={<MovieDetails />}>
        <Route path="cast" element={<div>cast</div>} />
        <Route path="reviews" element={<div>reviews</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
