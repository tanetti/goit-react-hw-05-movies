import { useState, useEffect } from 'react';
import { getTrending } from 'api/api';
import { Section, Container } from 'components/Shared';
import { HiddenPageTitle } from 'components/Shared/HiddenPageTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Message } from 'components/Shared/Message.styled';

export const Home = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    getTrending()
      .then(result => {
        setMoviesData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, []);

  return (
    <Section>
      <Container>
        <HiddenPageTitle>Trending movies</HiddenPageTitle>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'rejected' && (
          <Message>Ooops, something went wrong</Message>
        )}
        {status === 'resolved' && <MoviesList moviesData={moviesData} />}
      </Container>
    </Section>
  );
};
