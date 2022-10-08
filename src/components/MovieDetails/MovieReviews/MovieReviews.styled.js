import styled from 'styled-components';

export const NoRewiews = styled.p`
  margin: ${({ theme }) => theme.space[0]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  text-align: center;
`;
