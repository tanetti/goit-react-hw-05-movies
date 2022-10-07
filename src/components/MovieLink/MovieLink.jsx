import { StyledMovieLink } from './MovieLink.styled';
import { useLocation } from 'react-router-dom';

export const MovieLink = ({ movie }) => {
  const currentLocation = useLocation();
  const movieLink = `/movies/${movie.id}`;

  return (
    <StyledMovieLink
      to={movieLink}
      state={{ prevLocation: currentLocation, movie }}
    >
      {movie.original_title}
    </StyledMovieLink>
  );
};
