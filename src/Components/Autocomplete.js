import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';
import React from 'react';
import 'bulma/css/bulma.css';
import MovieOption from './MovieOption';

const Input = styled.input`
  margin: 5px 0px;
  //max-width: 350px;
`
const Results = styled.div`
  max-height: 500px;
  overflow-y: scroll;
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
export default function Autocomplete({movieList,debouncedHandleInputChange,inputValue,setInputValue,showDropdown,setShowDropdown,selectedMovieData,setSelectedMovieData}) {
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

  return (
    <div>
      <label><b>Search For a Movie</b></label>
      <Dropdown ref={dropdownRef}>
        <Input
          className="input"
          type="text"
          value={inputValue}
          onChange={(event) => debouncedHandleInputChange(event)}
          placeholder="Type something..."
        />
        {showDropdown && (
          <DropdownMenu>
            {movieList.map((movie) => (
              <MovieOption
                key={movie.props.i}
                i={movie.props.i}
                setSelectedMovieData={setSelectedMovieData} // Pass the function to set selected movie data
                poster={movie.props.poster}
                title={movie.props.title}
                year={movie.props.year}
                updateInput={handleOptionSelect} // Pass the function to update input
              />
            ))}
          </DropdownMenu>
        )}
      </Dropdown>
    </div>
  )
}