import { useState, useEffect } from 'react';

// import { apiGet } from '../services/apiService';

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}
