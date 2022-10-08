import { useState, useEffect } from 'react';
import { getTrending } from 'api/api';
import { Section, Container } from 'components/Shared';
import { HiddenPageTitle } from 'components/Shared/HiddenPageTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendingData, setTrendingData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    getTrending()
      .then(result => {
        setTrendingData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, []);

  return (
    <Section>
      <Container>
        <HiddenPageTitle>Trending movies</HiddenPageTitle>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'rejected' && <p>ERROR</p>}
        {status === 'resolved' && <MoviesList moviesData={trendingData} />}
      </Container>
    </Section>
  );
};
