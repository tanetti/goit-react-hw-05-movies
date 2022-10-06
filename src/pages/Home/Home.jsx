import { useState } from 'react';
import { getTrending } from 'api/api';
import { Container, Section } from 'components/Shared';
import { HiddenPageTitle } from 'components/Shared/HiddenPageTitle';
import { useEffect } from 'react';

export const Home = () => {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    getTrending().then(setTrendingData);
    console.log('render');
  }, []);

  return (
    <Section>
      <Container>
        <HiddenPageTitle>Trending movies</HiddenPageTitle>
        {trendingData &&
          trendingData.map(movie => (
            <p key={movie.id}>{movie.original_title}</p>
          ))}
      </Container>
    </Section>
  );
};
