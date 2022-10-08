import { useState, useEffect } from 'react';
import { getTrending } from 'api/api';
import { Section, Container } from 'components/Shared';
import { PageTitle } from 'components/Shared/PageTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Message } from 'components/Shared/Message.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
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
        <PageTitle>Trending today</PageTitle>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <Message>Ooops, something went wrong</Message>
        )}
        {status === 'resolved' && <MoviesList moviesData={moviesData} />}
      </Container>
    </Section>
  );
};

export default Home;
