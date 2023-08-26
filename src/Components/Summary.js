import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';

/* const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.winner {
    background-color: #90ee90;
  }
`;

const MovieImage = styled.img`
  width: auto;  
  height: 150px;
  margin-right: 20px;
`;

const MovieInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 24px;
  Margin-top: 0px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const MovieGenre = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
  color: #666;
  font-weight: bold;
`;

const MoviePlot = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const MovieStatistics = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieStat = styled.p`
  font-size: 16px;
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction:column;
  text-align: center;


  span {
    font-size: 12px;
    color: #666;
    margin-left: 0px;
  }
`; */



export default function Summary({Title, Year, Genre, Plot, Poster, Awards, BoxOffice, Metascore, imdbRating, imdbVotes}) {
    
  return (
      <div className="styled-summary">
        <div className="movie-info">
          <img className="movie-image" src={Poster === 'N/A' ? '' : Poster} alt={`Poster for ${Title}`} />
          <div>
            <h1 className="movie-title">{Title} ({Year})</h1>
            <h4 className="movie-genre">{Genre}</h4>
            <p className="movie-plot">{Plot}</p>
          </div>
        </div>

        <div className="movie-statistics">
          <p className="movie-stat">
            {Awards?Awards:`N/A`}
            <span>Awards</span>
          </p>
          <p className="movie-stat">
            {BoxOffice?BoxOffice:`N/A`}
            <span>US Box Office</span>
          </p>
          <p className="movie-stat">
            {Metascore}
            <span>Metascore</span>
          </p>
          <p className="movie-stat">
            {imdbRating}
            <span>IMDB Rating</span>
          </p>
          <p className="movie-stat">
            {imdbVotes}
            <span>IMDB Votes</span>
          </p>
        </div>
      </div>
    )
}