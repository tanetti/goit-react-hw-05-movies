import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovieLink = styled(Link)`
  display: block;

  padding: ${({ theme }) => theme.space[3]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: none;
`;
