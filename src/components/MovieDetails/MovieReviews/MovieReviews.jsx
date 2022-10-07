import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/api';
import { ReviewsList } from './ReviewsList/ReviewsList';

export const MovieReviews = () => {
  const { movieID } = useParams();
  const [reviewsData, setReviewsData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getReviews(movieID)
      .then(result => {
        setReviewsData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  return (
    <>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>ERROR</p>}
      {status === 'resolved' && reviewsData && (
        <ReviewsList reviewsData={reviewsData} />
      )}
    </>
  );
};
