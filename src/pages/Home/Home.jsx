import { useState, useEffect } from 'react';
import { getTrending } from 'api/api';
import { Container, Section } from 'components/Shared';
import { HiddenPageTitle } from 'components/Shared/HiddenPageTitle';
import { MovieLink } from 'components/MovieLink/MovieLink';

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
        {status === 'resolved' && trendingData && (
          <ul>
            {trendingData.map(movie => (
              <li key={movie.id}>
                <MovieLink movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};
