import { useState } from 'react';
import { getTrending } from 'api/api';
import { Container, Section } from 'components/Shared';
import { HiddenPageTitle } from 'components/Shared/HiddenPageTitle';
import { useEffect } from 'react';

export const Home = () => {
  const [trendingData, setTrendingData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

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
        {status === 'resolved' &&
          trendingData &&
          trendingData.map(movie => (
            <p key={movie.id}>{movie.original_title}</p>
          ))}
      </Container>
    </Section>
  );
};
