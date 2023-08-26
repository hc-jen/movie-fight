import React from 'react';

export default function NewSummary({left, right}) {

  return (
      <div className="styled-newsummary">
        <div className="newsummary-column">

          <div className="movie-info" >
            <img className="movie-image" src={left.Poster === 'N/A' ? '' : left.Poster} alt={`Poster for ${left.Title}`} />
            <div>
              <h1 className="movie-title">{left.Title} ({left.Year})</h1>
              <h4 className="movie-genre">{left.Genre}</h4>
              <p className="movie-plot">{left.Plot}</p>
            </div>
          </div>

          <div className="movie-statistics">
            <p className="movie-stat">
              {left.Awards?left.Awards:`N/A`}
              <span>Awards</span>
            </p>
            <p className={`movie-stat ${parseInt(left.BoxOffice.replace(/\$/g,'').replace(/,/g,''))>parseInt(right.BoxOffice.replace(/\$/g,'').replace(/,/g,''))?"is-winner":"is-loser"}`}>
              {left.BoxOffice?left.BoxOffice:`N/A`}
              <span>US Box Office</span>
            </p>
            <p className={`movie-stat ${parseInt(left.Metascore)>parseInt(right.Metascore)?"is-winner":"is-loser"}`}>
              {left.Metascore}
              <span>Metascore</span>
            </p>
            <p className={`movie-stat ${parseFloat(left.imdbRating)>parseFloat(right.imdbRating)?"is-winner":"is-loser"}`}>
              {left.imdbRating}
              {console.log("left.imdbRating",parseInt(left.imdbRating))}
              {console.log("right.imdbRating",parseInt(right.imdbRating))}
              <span>IMDB Rating</span>
            </p>
            <p className={`movie-stat ${parseInt(left.imdbVotes)>parseInt(right.imdbVotes)?"is-winner":"is-loser"}`}>
              {left.imdbVotes}
              <span>IMDB Votes</span>
            </p>
          </div>

        </div>

        <div className="newsummary-column">

          <div className="movie-info">
            <img className="movie-image" src={right.Poster === 'N/A' ? '' : right.Poster} alt={`Poster for ${right.Title}`} />
            <div>
              <h1 className="movie-title">{right.Title} ({right.Year})</h1>
              <h4 className="movie-genre">{right.Genre}</h4>
              <p className="movie-plot">{right.Plot}</p>
            </div>
          </div>

          <div className="movie-statistics">
            <p className="movie-stat">
              {right.Awards?right.Awards:`N/A`}
              <span>Awards</span>
            </p>
            <p className={`movie-stat ${parseInt(right.BoxOffice.replace(/\$/g,'').replace(/,/g,''))>left.BoxOffice.replace(/\$/g,'').replace(/,/g,'')?"is-winner":"is-loser"}`}>
              {right.BoxOffice?right.BoxOffice:`N/A`}
              <span>US Box Office</span>
            </p>
            <p className={`movie-stat ${parseInt(right.Metascore)>parseInt(left.Metascore)?"is-winner":"is-loser"}`}>
              {right.Metascore}
              <span>Metascore</span>
            </p>
            <p className={`movie-stat ${parseFloat(right.imdbRating)>parseFloat(left.imdbRating)?"is-winner":"is-loser"}`}>
              {right.imdbRating}
              <span>IMDB Rating</span>
            </p>
            <p className={`movie-stat ${parseInt(right.imdbVotes)>parseInt(left.imdbVotes)?"is-winner":"is-loser"}`}>
              {right.imdbVotes}
              <span>IMDB Votes</span>
            </p>
          </div>

        </div>
      </div>
    )
}