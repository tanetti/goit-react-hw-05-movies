import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovieLink = styled(Link)`
  display: block;

  padding: ${({ theme }) => theme.space[2]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: none;
`;
