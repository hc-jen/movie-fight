import React from 'react';
import axios from 'axios';

const fetchData = async (searchTerm) => {
  const response = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: '31a2c4e4',
      s: searchTerm
    }
  });

  if (response.data.Error) {
    return [];
  }
  
  return response.data.Search;
};

export default fetchData;