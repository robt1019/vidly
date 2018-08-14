import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./Movie";

class Movies extends Component {
  state = {
    movies: Array.from(getMovies())
  };

  handleDelete(id) {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  }

  render() {
    return (
      <div>
        <h3>Showing {this.state.movies.length} movies in the database</h3>
        {this.state.movies.map(movie => (
          <Movie
            key={movie._id}
            movie={movie}
            onDelete={() => this.handleDelete(movie._id)}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
