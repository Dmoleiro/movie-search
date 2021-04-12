import '../style/Search.css';

function Search(props) {
  return (
    <div className="searchPage">
        <div className="pageTitle">Welcome to movie search</div>
        <input className ="searchInput" type="text" name="search" id="searchBox" onKeyDown={props.handleSearchKeyDown}/>
        <button className="searchButton" onClick={props.handleSearchClick}>Search</button>
        <button className="clearButton" onClick={props.clearResults}>Clear Results</button>
    </div>
  );
}

export default Search;