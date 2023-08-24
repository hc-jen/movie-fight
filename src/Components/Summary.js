import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';

const StyledSummary = styled.div`
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
`;



export default function Summary({Title, Year, Genre, Plot, Poster, Awards, BoxOffice, Metascore, imdbRating, imdbVotes}) {
    
  return (
      <StyledSummary>
        <MovieInfo>
          <MovieImage src={Poster === 'N/A' ? '' : Poster} alt={`Poster for ${Title}`} />
          <div>
            <MovieTitle>{Title} ({Year})</MovieTitle>
            <MovieGenre>{Genre}</MovieGenre>
            <MoviePlot>{Plot}</MoviePlot>
          </div>
        </MovieInfo>

        <MovieStatistics>
          <MovieStat>
            {Awards?Awards:`N/A`}
            <span>Awards</span>
          </MovieStat>
          <MovieStat>
            {BoxOffice?BoxOffice:`N/A`}
            <span>US Box Office</span>
          </MovieStat>
          <MovieStat>
            {Metascore}
            <span>Metascore</span>
          </MovieStat>
          <MovieStat>
            {imdbRating}
            <span>IMDB Rating</span>
          </MovieStat>
          <MovieStat>
            {imdbVotes}
            <span>IMDB Votes</span>
          </MovieStat>
        </MovieStatistics>
      </StyledSummary>
    )
}