import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/api';
import { ReviewsList } from './ReviewsList/ReviewsList';
import { NoRewiews } from './MovieReviews.styled';

export const MovieReviews = () => {
  const { movieID } = useParams();
  const [reviewsData, setReviewsData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    getReviews(movieID)
      .then(result => {
        setReviewsData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  if (status === 'pending') return <p>Loading...</p>;

  if (status === 'rejected') return <p>ERROR</p>;

  if (status === 'resolved' && reviewsData.length === 0)
    return <NoRewiews>There is no reviews for that movie</NoRewiews>;

  if (status === 'resolved') return <ReviewsList reviewsData={reviewsData} />;
};
