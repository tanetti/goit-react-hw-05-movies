import { Link, Outlet } from 'react-router-dom';
import {
  Description,
  DescriptionContainer,
  MovieImage,
  ParagraphTitle,
  Paragraph,
  Title,
} from './MovieDescription.styled';

export const MovieDescription = ({
  movieDetails: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => (
  <>
    <DescriptionContainer>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
        alt={original_title}
        width={185}
      />
      <Description>
        <Title>{`${original_title} (${release_date.substring(0, 4)})`}</Title>
        <Paragraph>{`User score: ${Math.round(vote_average * 10)}%`}</Paragraph>
        <Paragraph>
          <ParagraphTitle>Overview</ParagraphTitle>
          {overview}
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Genres</ParagraphTitle>
          {genres.map(genre => genre.name).join(', ')}
        </Paragraph>
      </Description>
    </DescriptionContainer>
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
    </div>
    <Outlet />
  </>
);
