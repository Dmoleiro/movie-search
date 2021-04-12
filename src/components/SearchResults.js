import '../style/SearchResults.css';

function SearchResults(props) {
    let movies = null;

    if (props.movies && props.movies.length > 0) {
        movies = props.movies.map((m, i) => {
            return (
                <div className="poster" key={`movie_${i}`}>
                    <div className="posterTitle" >Title: {m.Title}</div>
                    <img className="posterImage" alt={`movie_${i}_poster`} src={m.Poster} onClick={() => props.selectMovie(m.imdbID)}/>
                </div>
            );
        })
    } else {
        movies = props.error;
    }
    return (
    <div className="searchResults">
        {movies}
    </div>
    );
}

export default SearchResults;