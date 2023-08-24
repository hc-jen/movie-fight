import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bulma/css/bulma.css';
import useDebounce from './Helper/useDebounce';
import MovieOption from './Components/MovieOption';
import Autocomplete from './Components/Autocomplete';
import Summary from './Components/Summary';
import WinnerSection from './Components/WinnerSection';

const Tutorial = styled.div`
    max-width: 50vw;
    text-align: center;
    margin: auto;
    margin-top: 50px;
    span {
      margin-top: 0px;
    }
  `

  const Notification = styled.div`
    margin-top: 20px !important;
  `
  const Results = styled.div`
    max-height: 500px;
    overflow-y: scroll;
  `
  const Title = styled.h1`
    margin-left: 0px;
    margin-top: 10px !important;
  `
  const Icon = styled.span`
    margin-left: 15px;
  `
  const Hero = styled.section`
    margin-bottom: 20px;
  `

  const HeroBody = styled.div`
  `

  const Container = styled.div`
    margin: 10px;
    max-width: 50%;
    width: 40%;
  `
  const Wrapper = styled.div`
  `

  const ComparisonArea = styled.div`
    display: flex;
    flex-direction: row;
  `
  const RunComparisonButton = styled.button`
    background-color: #00d1b2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    margin-bottom: 50px;
 
    &:hover {
      background-color: #008571;
    }
  `;

  const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
  `
  
library.add(faFilm);

const fetchData = async (searchTerm) => {
  const response = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: '31a2c4e4',
      s: searchTerm
    }
  })
  if (response.data.Error) {
    return []
  }
  return response.data.Search
}



function App() {
  const [inputValue1, setInputValue1] = React.useState('');
  const [movieList1, setMovieList1] = React.useState([]);
  const [showDropdown1, setShowDropdown1] = React.useState(false); // Initialize showDropdown state
  const [selectedMovieData1, setSelectedMovieData1] = React.useState(null);
  const [winner, setWinner] = React.useState(null)
  console.log('Renders1')

  const handleInputChange1 = async (event) => {
    setSelectedMovieData1(null)
    setWinner(null)
    const newValue = event.target.value;
    setInputValue1(newValue);
    setShowDropdown1(true); // Show the dropdown when input changes
    const movies = await fetchData(newValue);
    console.log('movies', movies)

    const moviesComponents1 = movies.map( m => 
                              <MovieOption poster={m.Poster}
                                           title={m.Title}
                                           year={m.Year}
                                           key={m.imdbID}
                                           i={m.imdbID}
                              />
                                  )
    console.log('moviesComponents1', moviesComponents1)
    setMovieList1(moviesComponents1);
  };
  
  const debouncedHandleInputChange1 = useDebounce(handleInputChange1);


  const [inputValue2, setInputValue2] = React.useState('');
  const [movieList2, setMovieList2] = React.useState([]);
  const [showDropdown2, setShowDropdown2] = React.useState(false); // Initialize showDropdown state
  const [selectedMovieData2, setSelectedMovieData2] = React.useState(null);

  console.log('Renders2')

  const handleInputChange2 = async (event) => {
    setSelectedMovieData2(null)
    const newValue = event.target.value;
    setInputValue2(newValue);
    setShowDropdown2(true); // Show the dropdown when input changes
    const movies = await fetchData(newValue);
    console.log('movies', movies)

    const moviesComponents2 = movies.map( m => 
                              <MovieOption poster={m.Poster}
                                           title={m.Title}
                                           year={m.Year}
                                           key={m.imdbID}
                                           i={m.imdbID}
                              />
                                  )
    console.log('moviesComponents2', moviesComponents2)
    setMovieList2(moviesComponents2);
  };
  
  const debouncedHandleInputChange2 = useDebounce(handleInputChange2);

  const runComparison = () => {
    console.log("selectedMovieData1",selectedMovieData1)
    console.log("selectedMovieData2",selectedMovieData2)
    const awards1 = selectedMovieData1.Awards.split('').reduce((prev, word) => {
      const value = parseInt(word)

      if(isNaN(value)) {
        return prev;
      }else{
        return prev + value
      }
    }, 0)

    const awards2 = selectedMovieData2.Awards.split('').reduce((prev, word) => {
      const value = parseInt(word)

      if(isNaN(value)) {
        return prev;
      }else{
        return prev + value
      }
    }, 0)

    const boxOffice1 = parseInt(selectedMovieData1.BoxOffice.replace(/\$/g, '').replace(/,/g, ''))
    const boxOffice2 = parseInt(selectedMovieData2.BoxOffice.replace(/\$/g, '').replace(/,/g, ''))
  
    const metascore1 = parseInt(selectedMovieData1.Metascore)
    const metascore2 = parseInt(selectedMovieData2.Metascore)

    const imdbRating1 = parseFloat(selectedMovieData1.imdbRating)
    const imdbRating2 = parseFloat(selectedMovieData2.imdbRating)

    const imdbVotes1 = parseInt(selectedMovieData1.imdbVotes)
    const imdbVotes2 = parseInt(selectedMovieData2.imdbVotes)

    console.log("比較",{ "BoxOffice": boxOffice1>boxOffice2?selectedMovieData1.Title:selectedMovieData2.Title,
                  "Metascore": metascore1>metascore2?selectedMovieData1.Title:selectedMovieData2.Title,
                  "imdbRating":imdbRating1>imdbRating2?selectedMovieData1.Title:selectedMovieData2.Title,
                  "imdbVotes":imdbVotes1>imdbVotes2?selectedMovieData1.Title:selectedMovieData2.Title
                })
    const winnerSet = { "BoxOffice": boxOffice1>boxOffice2?selectedMovieData1.Title:selectedMovieData2.Title,
                        "Metascore": metascore1>metascore2?selectedMovieData1.Title:selectedMovieData2.Title,
                        "imdbRating":imdbRating1>imdbRating2?selectedMovieData1.Title:selectedMovieData2.Title,
                        "imdbVotes":imdbVotes1>imdbVotes2?selectedMovieData1.Title:selectedMovieData2.Title
                      }
    setWinner(winnerSet)       
  } 

  const reset = () => {
    setInputValue1("")
    setInputValue2("")
    setMovieList1([])
    setMovieList2([])
    setSelectedMovieData1(null)
    setSelectedMovieData2(null)
    setWinner(null)
  }

  

  return (
    <Wrapper>
      <Hero className="hero is-primary is-bold">
        <HeroBody className="hero-body">
          <Container className="container">
            <Title className="title">
              Movie Fight
              <Icon>
                <FontAwesomeIcon icon="film" />
              </Icon>
            </Title>
          </Container>
        </HeroBody>
      </Hero>
      <ComparisonArea className="container">
      <Container className="container">
        <Autocomplete movieList={movieList1} 
                      debouncedHandleInputChange={debouncedHandleInputChange1}
                      inputValue={inputValue1}
                      setInputValue={setInputValue1}
                      showDropdown={showDropdown1}
                      setShowDropdown={setShowDropdown1} // Pass showDropdown to Autocomplete
                      selectedMovieData={selectedMovieData1} // Pass the selected movie data to Autocomplete
                      setSelectedMovieData={setSelectedMovieData1}
                      />
        {selectedMovieData1 && <Summary {...selectedMovieData1} />} {/* Render Summary if selectedMovieData exists */}
      </Container>
      <Container className="container">
        <Autocomplete movieList={movieList2} 
                      debouncedHandleInputChange={debouncedHandleInputChange2}
                      inputValue={inputValue2}
                      setInputValue={setInputValue2}
                      showDropdown={showDropdown2}
                      setShowDropdown={setShowDropdown2} // Pass showDropdown to Autocomplete
                      selectedMovieData={selectedMovieData2} // Pass the selected movie data to Autocomplete
                      setSelectedMovieData={setSelectedMovieData2}
                      />
        {selectedMovieData2 && <Summary {...selectedMovieData2} />} {/* Render Summary if selectedMovieData exists */}
      </Container>
      </ComparisonArea>
      {!inputValue1&&!inputValue2&&<Tutorial className="column is-primary hero">
        <Title className="title">
          Search For a Movie On Both Sides
        </Title>
        <span>We will tell you which is best!</span>
      </Tutorial>}
      <CenteredContainer>
        {selectedMovieData1&&selectedMovieData2&&!winner&&
          <RunComparisonButton onClick={runComparison}>
            Run Comparison
          </RunComparisonButton>}
        {/* {selectedMovieData1&&selectedMovieData2&&runComparison()} */}
        {winner && <WinnerSection {...winner}/>}
        {winner && <RunComparisonButton onClick={reset}>
            Reset
          </RunComparisonButton>}
      </CenteredContainer>
      
    </Wrapper>
  );
}

export default App;
