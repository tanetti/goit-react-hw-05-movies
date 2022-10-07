import PropTypes from 'prop-types';
import { Paragraph, ReviewList, ReviewItem } from './ReviewsList.styled';

export const ReviewsList = ({ reviewsData }) =>
  reviewsData.length === 0 ? (
    <Paragraph>There is no reviews for that film.</Paragraph>
  ) : (
    <ReviewList>
      {reviewsData.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <Paragraph>{`Author: ${author}`}</Paragraph>
          <Paragraph>{content}</Paragraph>
        </ReviewItem>
      ))}
    </ReviewList>
  );

ReviewsList.propTypes = {
  reviewsData: PropTypes.array.isRequired,
};
