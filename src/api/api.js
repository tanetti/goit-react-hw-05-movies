import axios from 'axios';
import { API_BASE_URL, API_KEY } from 'constants/api';

axios.defaults.baseURL = API_BASE_URL;

export const getTrending = async () => {
  const params = {
    api_key: API_KEY,
  };

  const queryData = await axios('/trending/movie/day', { params });

  if (queryData?.status !== 200) return 'error';

  return queryData.data.results;
};
