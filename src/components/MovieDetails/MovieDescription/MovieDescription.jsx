import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { AdditionalLinks } from './AdditionalLinks/AdditionalLinks';
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
    <AdditionalLinks />
    <Outlet />
  </>
);

MovieDescription.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
