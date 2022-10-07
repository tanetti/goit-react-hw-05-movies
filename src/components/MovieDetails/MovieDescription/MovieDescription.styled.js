import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;

  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const MovieImage = styled.img`
  display: block;

  width: 185px;
  height: auto;

  object-fit: cover;
`;

export const Description = styled.div`
  padding: ${({ theme }) => theme.space[4]};
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const Paragraph = styled.p`
  padding: ${({ theme }) => theme.space[0]};
  margin: ${({ theme }) => theme.space[0]};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

export const ParagraphTitle = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[3]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
