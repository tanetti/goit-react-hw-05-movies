import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/api';
import { CastList } from './CastList/CastList';

export const MovieCast = () => {
  const { movieID } = useParams();

  const [castData, setCastData] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    getCast(movieID)
      .then(result => {
        setCastData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  if (status === 'pending') return <p>Loading...</p>;

  if (status === 'rejected') return <p>ERROR</p>;

  if (status === 'resolved') return <CastList castData={castData} />;
};
