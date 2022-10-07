import PropTypes from 'prop-types';
import { StyledCastList, CastImage, CastItem } from './CastList.styled';

export const CastList = ({ castData }) => (
  <StyledCastList>
    {castData.map(artist => (
      <CastItem key={artist.name}>
        {artist.profile_path && (
          <CastImage
            src={`https://image.tmdb.org/t/p/w185/${artist.profile_path}`}
            alt={artist.name}
          />
        )}
        <p>{artist.name}</p>
        <p>{`Character: ${artist.character}`}</p>
      </CastItem>
    ))}
  </StyledCastList>
);

CastList.propTypes = {
  castData: PropTypes.array.isRequired,
};
