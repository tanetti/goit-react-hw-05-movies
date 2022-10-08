import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Section } from 'components/Shared';
import { getMovie } from 'api/api';
import { MovieDescription } from './MovieDescription/MovieDescription';
import { Message } from 'components/Shared/Message.styled';
import { BackLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieID } = useParams();

  const { state: prevPageLocation } = useLocation();

  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState('idle');

  const backLink = useRef(prevPageLocation ?? '/');

  useEffect(() => {
    setStatus('pending');

    getMovie(movieID)
      .then(result => {
        setMovieDetails(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  return (
    <Section>
      <Container>
        <BackLink to={backLink.current}>{'< Go back'}</BackLink>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'rejected' && (
          <Message>Ooops, something went wrong</Message>
        )}
        {status === 'resolved' && movieDetails && (
          <MovieDescription movieDetails={movieDetails} />
        )}
      </Container>
    </Section>
  );
};
