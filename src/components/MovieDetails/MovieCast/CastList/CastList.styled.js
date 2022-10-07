import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));

  list-style: none;

  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[0]};
`;

export const CastItem = styled.li`
  text-align: center;
`;

export const CastImage = styled.img`
  display: block;

  width: 185px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  object-fit: cover;
`;
