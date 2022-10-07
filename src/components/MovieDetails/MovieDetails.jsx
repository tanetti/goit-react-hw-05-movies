import { getMovie } from 'api/api';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieID } = useParams();
  const { state: prevPageState } = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState('idle');

  const prevPageLocation = prevPageState?.prevLocation;
  const prevPageMovie = prevPageState?.movie;

  useEffect(() => {
    if (prevPageMovie) {
      setMovieDetails(prevPageMovie);
      setStatus('resolved');
      return;
    }

    setStatus('pending');
    getMovie(movieID)
      .then(result => {
        setMovieDetails(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieID, prevPageMovie]);

  const backLink = prevPageLocation ?? '/';

  return (
    <>
      <Link to={backLink}>Go back</Link>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>ERROR</p>}
      {status === 'resolved' && movieDetails && <div>{movieDetails.id}</div>}
    </>
  );
};
