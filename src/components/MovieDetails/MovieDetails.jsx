import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container, Section } from 'components/Shared';
import { getMovie } from 'api/api';
import { MovieDescription } from './MovieDescription/MovieDescription';

export const MovieDetails = () => {
  const { movieID } = useParams();

  const { state: prevPageLocation } = useLocation();

  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getMovie(movieID)
      .then(result => {
        setMovieDetails(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  const backLink = prevPageLocation ?? '/';

  return (
    <Section>
      <Container>
        <Link to={backLink}>Go back</Link>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'rejected' && <p>ERROR</p>}
        {status === 'resolved' && movieDetails && (
          <MovieDescription movieDetails={movieDetails} />
        )}
      </Container>
    </Section>
  );
};
