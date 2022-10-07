import { getCast } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './CastList/CastList';

export const MovieCast = () => {
  const { movieID } = useParams();
  const [castData, setCastData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getCast(movieID)
      .then(result => {
        setCastData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID]);

  return (
    <>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>ERROR</p>}
      {status === 'resolved' && castData && <CastList castData={castData} />}
    </>
  );
};
