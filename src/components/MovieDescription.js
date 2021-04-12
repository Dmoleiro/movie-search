import '../style/MovieDescription.css';

function MovieDescription(props) {
  return (
    <div>
      <button className="backButton" onClick={props.backToHomeScreen}>Go Back</button>
      <div className="movieDescription">
          <div className="titles">Actors: <div className="text">{props.movie.Actors}</div></div>
          <div className="titles">Country: <div className="text">{props.movie.Country}</div></div>
          <div className="titles">Director: <div className="text">{props.movie.Director}</div></div>
          <div className="titles">Genre: <div className="text">{props.movie.Genre}</div></div>
          <div className="titles">Plot: <div className="text">{props.movie.Plot}</div></div>
          <div className="titles">Title: <div className="text">{props.movie.Title}</div></div>
          <div className="titles">Year: <div className="text">{props.movie.Year}</div></div>
          <div className="titles">Rating: <div className="text">{props.movie.imdbRating}</div></div>
          <img alt={`movie_poster`} src={props.movie.Poster}/>
      </div>
    </div>
  );
}

export default MovieDescription;