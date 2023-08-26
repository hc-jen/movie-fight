import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Autocomplete from './Components/Autocomplete';
import Summary from './Components/Summary';
import NewSummary from './Components/NewSummary';
library.add(faFilm);
/* const Wrapper = styled.div`

`

const Header = styled.header`

`
const Title = styled.h1`

`
const Icon = styled.img`

`
const ComparisonArea = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`

`
 */


function App() {
  //const [winner, setWinner] = React.useState(null)
  const [isShowTutorial, setIsShowTutorial] =  React.useState(true)
  const [selectedMovieData, setSelectedMovieData] = React.useState({});
  const showSummary = selectedMovieData["left"]&&selectedMovieData["right"]
  const reset = () =>{
    setIsShowTutorial(true)
    setSelectedMovieData({})
  }
  console.log("render app.js")
  return (
    <div className="wrapper">
      <header>
        <div className="title">
          <span>Movie Fight</span>
          
          {/* <img className="icon" src={process.env.PUBLIC_URL + '/Movie Fight.png'} alt="Movie Fight"/> */}
        </div>
        <FontAwesomeIcon icon="film" />
      </header>
      <section className="display-area">
        <div className="autocomplete-area">
          <div className="autocomplete-column">
            <Autocomplete setIsShowTutorial={setIsShowTutorial} column={"left"} selectedMovieData={selectedMovieData} setSelectedMovieData={setSelectedMovieData}/>
          </div>
          <div className="autocomplete-column">
            <Autocomplete setIsShowTutorial={setIsShowTutorial} column={"right"} selectedMovieData={selectedMovieData} setSelectedMovieData={setSelectedMovieData}/>
          </div>
        </div>
        <div className="summary-area">
          <div className="left-summary">
            {!showSummary&&selectedMovieData["left"] && <Summary {...selectedMovieData["left"]} />}
          </div>
          <div className="right-summary">
            {!showSummary&&selectedMovieData["right"] && <Summary {...selectedMovieData["right"]} />}
          </div>
        </div>
        <div className="newsummary-area">
          {selectedMovieData["left"] && selectedMovieData["right"] && <NewSummary {...selectedMovieData} />}
          {selectedMovieData["left"] && selectedMovieData["right"] &&console.log("selectedMovieData",selectedMovieData)}
        </div>
      </section>
      {isShowTutorial&& <section className="tutorial">
        <div className="title">
          Search For a Movie On Both Sides
        </div>
        <span>We will tell you which is the best!</span>
      </section>}
      {/* {showSummary&&<button onClick={reset}>Reset</button>} */}
      
    </div>
  );
}

export default App;
