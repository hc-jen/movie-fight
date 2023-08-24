import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';


const StyledMovieOption = styled.a`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee; /* Add a subtle separator */
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f5f5f5; /* Highlight on hover */
  }
`;

const MovieImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;


export default function MovieOption({poster, title, year, className, updateInput, i, setSelectedMovieData}) {
  const handleOptionClick = async () => {
    updateInput(title);
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: '31a2c4e4',
        i: i,
      },
    });
    setSelectedMovieData(response.data); // Set the selected movie data
  };

  return (
    <StyledMovieOption className={className} onClick={handleOptionClick}>
      <MovieImage src={poster==='N/A'?'':poster} alt={`Poster for ${title}`} />
      <p>{title} ({year})</p>
      </StyledMovieOption>
  )
}