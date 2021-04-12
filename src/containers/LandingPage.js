import React, { Component } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import MovieDescription from '../components/MovieDescription';
import Constant from '../constants/const';
import '../style/LandingPage.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apikey: '59667ae0', // please change this by a valid key if this one does not work when testing
            searchKey: '',
            movies: [],
            selectedMovie: null,
            showSearchResults: true,
        }
    }

    searchMovies = (key = this.state.key) => {
        fetch(`http://www.omdbapi.com/?apikey=${this.state.apikey}&type=movie&s=${key}`)
        .then((success) => { 
          success.json()
          .then((result) => {
              console.log(result);
              this.setState({
                    searchKey: key,
                    movies: result?.Search,
                    error: result?.response ? null : result.Error,
                    selectedMovie: null,
                    showSearchResults: true,
              });
            });
        } )
        .catch((error)=>{ 
            console.log(error)
        });
    };

    getMovieData = (imdbID) => {
        fetch(`http://www.omdbapi.com/?apikey=${this.state.apikey}&type=movie&i=${imdbID}`)
        .then((success) => { 
            success.json()
            .then((result) => {
                console.log(result);
                this.setState({
                    showSearchResults: false,
                    selectedMovie: result,
                });
              });
          } )
          .catch((error)=>{ 
              console.log(error)
          });
    }
      
    handleSearch = () => {
        let searchValue = document.getElementById('searchBox')?.value;
        this.searchMovies(searchValue);
    };

    handleSearchKeyDown = (evt) => {
        let { ENTER } = Constant.KEYS;
        if (evt?.keyCode === ENTER) {
            this.handleSearch();
        }
    };

    selectMovie = (imdbID) => {
        imdbID && this.getMovieData(imdbID);
    }

    backToHomeScreen = () => {
        this.setState({
            selectedMovie: null,
            showSearchResults: true,
        });
    }

    clearResults = () => {
        this.setState({
            searchKey: '',
            movies: [],
            selectedMovie: null,
            showSearchResults: true,
        });
    }

    render() {
        return (
            <div className="landingPageContainer">
                {this.state.showSearchResults && <Search
                    handleSearchClick={this.handleSearch} 
                    handleSearchKeyDown={this.handleSearchKeyDown} 
                    currentPage={this.state.currentPage} 
                    hasMorePages={this.state.hasMorePages} 
                    totalPageCount={this.state.totalPageCount}
                    searchKey={this.state.searchKey}
                    clearResults={this.clearResults}
                />}
                {this.state.showSearchResults && <SearchResults 
                    currentPage={this.state.currentPage} 
                    movies={this.state.movies} 
                    hasMorePages={this.state.hasMorePages} 
                    totalPageCount={this.state.totalPageCount}
                    error={this.state.error}
                    selectMovie={this.selectMovie}
                />}
                {this.state.selectedMovie && <MovieDescription 
                    movie={this.state.selectedMovie}
                    backToHomeScreen={this.backToHomeScreen}
                />}
            </div>
        );
    }
}

export default LandingPage;