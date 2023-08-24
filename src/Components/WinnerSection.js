import styled from '@emotion/styled';
import React from 'react';

const StyledWinnerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #ffffff;
`;

const WinnerText = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export default function WinnerSection({BoxOffice, Metascore, imdbRating, imdbVotes}) {
  return (
    <StyledWinnerSection>
      <WinnerText>
        The US Box Office Winner is {BoxOffice}.
      </WinnerText>
      <WinnerText>
        The Metascore Winner is {Metascore}.
      </WinnerText>
      <WinnerText>
        The imdbRating Winner is {imdbRating}.
      </WinnerText>
      <WinnerText>
        The imdbVotes Winner is {imdbVotes}.
      </WinnerText>
      <WinnerText>
        The US Box Office Winner is {BoxOffice}.
      </WinnerText>
    </StyledWinnerSection>
  )
}