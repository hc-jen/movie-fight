import React from 'react';
import styled from '@emotion/styled';
import fetchData from '../Helper/fetchData'
import useDebounce from '../Helper/useDebounce'
import MovieOption from './MovieOption';
import Summary from './Summary';
import NewSummary from './NewSummary';
const Input = styled.input`
  margin: 5px 0px;
  //max-width: 350px;
`
const Dropdown = styled.div`
  position: relative;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;


export default function Autocomplete({setIsShowTutorial, column, selectedMovieData, setSelectedMovieData}) {
  const [inputValue, setInputValue] = React.useState('');
  const [movieList, setMovieList] = React.useState([]);
  const [showDropdown, setShowDropdown] = React.useState(false); // Initialize showDropdown state

  console.log(`1st ${column}`, selectedMovieData)
  const dropdownRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (title) => {
    setInputValue(title); // Update the input value
    setShowDropdown(false); // Close the dropdown
  };

  const debouncedFetchData = useDebounce(fetchData, 1000); // Debounce fetchData
  const handleInputChange = async (event) => {
    setIsShowTutorial(false)

    //setWinner(null)
    const newValue = event.target.value;
    setInputValue(newValue);
    setShowDropdown(true); // Show the dropdown when input changes
    //console.log("inputValue", inputValue)
    const movies = await fetchData(newValue);
    //console.log('movies', movies)

    const moviesComponents = movies.map( m => 
                              <MovieOption poster={m.Poster}
                                           title={m.Title}
                                           year={m.Year}
                                           key={m.imdbID}
                                           i={m.imdbID}
                              />
                                  )
    //console.log('moviesComponents', moviesComponents)
    setMovieList(moviesComponents);
  };

  return (
    <div className="autocomplete-wrapper">
      <label><b>Search For a Movie</b></label>
      <div className="dropdown" ref={dropdownRef}>
      <input 
            type="text"
            value={inputValue}
            onChange={(event) => handleInputChange(event)}
            placeholder="Type something..."/>
      {showDropdown && (
          <div className="dropdown-menu">
            {movieList.map((movie) => (
              <MovieOption
                key={movie.props.i}
                i={movie.props.i}
                setSelectedMovieData={setSelectedMovieData} // Pass the function to set selected movie data
                poster={movie.props.poster}
                title={movie.props.title}
                year={movie.props.year}
                updateInput={handleOptionSelect} // Pass the function to update input
                column={column}
              />
            ))}
          </div>
        )}
      </div>
      {/* {selectedMovieData[column] && <Summary {...selectedMovieData[column]} />} */}
    </div>
  )
}
/* 
App.js
<Autocomplete setIsShowTutorial={setIsShowTutorial} column={"right"}/>
<Autocomplete setIsShowTutorial={setIsShowTutorial} column={"left"}/>

Autocomplete.js
{movieList.map((movie) => (
              <MovieOption
                key={movie.props.i}
                i={movie.props.i}
                setSelectedMovieData={setSelectedMovieData} // Pass the function to set selected movie data
                poster={movie.props.poster}
                title={movie.props.title}
                year={movie.props.year}
                updateInput={handleOptionSelect} // Pass the function to update input
                column={column}
              />
            ))}


MovieOption.js
const handleOptionClick = async () => {
    updateInput(title);
    const response = await axios.get(`https://www.omdbapi.com/`, {
      params: {
        apikey: '31a2c4e4',
        i: i,
      },
    });
    setSelectedMovieData({...,{column}:response.data}); // Set the selected movie data
  };

Autocomplete.js
{selectedMovieData[column] && <Summary {...selectedMovieData[column]} />}



const fruit = {apple:"a",banana:"b"}
const column="apple"
function fav(f){
return fruit[f]
}
const ff = fav(column)
what is ff?
*/